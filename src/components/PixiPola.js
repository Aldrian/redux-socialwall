require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/PixiPolaView.scss')
require('styles/animate.scss')

import React from 'react'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class PixiPolaView extends React.Component {
  constructor(props) {
    super(props)
    this.pixiway1 = undefined;
    this.pixiway2 = undefined;
    this.pixiway3 = undefined;
    this.pixiway4 = undefined;
    this.hasMedia1 = false;
    this.hasMedia2 = false;
    this.hasMedia3 = false;
    this.hasMedia4 = false;
  }
  componentWillMount() {
    this.props.nextElem(4, this.props.pixiway.pixiwayUrl)
  }
  componentWillReceiveProps(newProps) {
    //Quick & dirty, to be refactored
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[0]) {
      this.pixiway1 = newProps.pixiway.data[0]
      if (this.pixiway1.entities.media) {
        this.hasMedia1 = true
      }
    }
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[1]) {
      this.pixiway2 = newProps.pixiway.data[1]
      if (this.pixiway2.entities.media) {
        this.hasMedia2 = true
      }
    }
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[2]) {
      this.pixiway3 = newProps.pixiway.data[2]
      if (this.pixiway3.entities.media) {
        this.hasMedia3 = true
      }
    }
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[3]) {
      this.pixiway4 = newProps.pixiway.data[3]
      if (this.pixiway4.entities.media) {
        this.hasMedia4 = true
      }
    }
    if (!newProps.pixiway.newPhoto && newProps.pixiway.data[newProps.pixiway.oldIndex]){
      this.pixiway1 = newProps.pixiway.data[newProps.pixiway.oldIndex]
      if (this.pixiway1.entities.media) {
        this.hasMedia1 = true
      }
    }
    if (!newProps.pixiway.newPhoto && newProps.pixiway.data[newProps.pixiway.oldIndex+1]){
      this.pixiway2 = newProps.pixiway.data[newProps.pixiway.oldIndex+1]
      if (this.pixiway2.entities.media) {
        this.hasMedia2 = true
      }
    }
    if (!newProps.pixiway.newPhoto && newProps.pixiway.data[newProps.pixiway.oldIndex+2]){
      this.pixiway3 = newProps.pixiway.data[newProps.pixiway.oldIndex+2]
      if (this.pixiway3.entities.media) {
        this.hasMedia3 = true
      }
    }
    if (!newProps.pixiway.newPhoto && newProps.pixiway.data[newProps.pixiway.oldIndex+3]){
      this.pixiway4 = newProps.pixiway.data[newProps.pixiway.oldIndex+3]
      if (this.pixiway4.entities.media) {
        this.hasMedia4 = true
      }
    }
    if (!this.pixiway1 && !this.pixiway2 && !this.pixiway3 && !this.pixiway4) {
      this.props.getNextSlide()
    }
  }
  render() {
    return (
      <div className="pixipolaview">
        <img className="imageLogo" src={logoAnniversaire}/>
          <div className="wrap">
            {this.pixiway4 ? <div className="img animated zoomInUp"><img src={this.pixiway4.entities.media[0].media_url}/></div> : null }
            {this.pixiway3 ? <div className="img animated zoomInRight"><img src={this.pixiway3.entities.media[0].media_url}/></div> : null }
            {this.pixiway2 ? <div className="img animated zoomInLeft"><img src={this.pixiway2.entities.media[0].media_url}/></div> : null }
            {this.pixiway1 ? <div className="img animated zoomInDown"><img src={this.pixiway1.entities.media[0].media_url}/><h4 className="slide__img-caption">#20ansNovius</h4></div> : null }
          </div>
        <img className="imageCta animated pulse" src={ctaPixiwayImage}/>
      </div>
      )
  }
}

PixiPolaView.defaultProps = {
}

export default PixiPolaView
