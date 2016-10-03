require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/PixiwayView.scss')
require('styles/animate.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class PixiwayView extends React.Component {
  constructor(props) {
    super(props)
    this.pixiway1 = undefined;
    this.pixiway2 = undefined;
    this.hasMedia1 = false;
    this.hasMedia2 = false;
  }
  componentWillMount() {
    this.props.nextElem(2, this.props.pixiway.pixiwayUrl)
  }
  componentWillReceiveProps(newProps) {
    //Quick & dirty, to be refactored
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[0]) {
      this.pixiway1 = newProps.pixiway.data[0]
      if (this.pixiway.entities.media) {
        this.hasMedia1 = true
      }
    }
    if (newProps.pixiway.newPhoto && newProps.pixiway.data[1]) {
      this.pixiway2 = newProps.pixiway.data[1]
      if (this.pixiway.entities.media) {
        this.hasMedia2 = true
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
    if (!this.pixiway1 && !this.pixiway2) {
      this.props.getNextSlide()
    }
  }
  render() {
    let imageProps1 = {
      rtopcorner: {
        size: 'medium',
        color: 'red'
      },
      lbotcorner: {
        size: 'medium',
        color: 'blue'
      }
    }
    let imageProps2 = {
      lbotcorner: {
        size: 'large',
        color: 'green'
      }
    }
    return (
      <div className="pixiwayview">
        <img className="imageLogo" src={logoAnniversaire}/>
        <div className="image-0">
          {this.pixiway2 && this.hasMedia2 ? <Image className="animated fadeInUp" src={this.pixiway2.entities.media[0].media_url} lbotcorner={imageProps2.lbotcorner} /> : null}
        </div>
        <div className="image-1">
          {this.pixiway1 && this.hasMedia1 ? <Image className="animated fadeInDown" src={this.pixiway1.entities.media[0].media_url} lbotcorner={imageProps1.lbotcorner} rtopcorner={imageProps1.rtopcorner}/> : null}
        </div>
        <img className="imageCta animated pulse" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

PixiwayView.defaultProps = {
}

export default PixiwayView
