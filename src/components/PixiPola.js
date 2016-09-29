require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/PixiPolaView.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class PixiPolaView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.nextElem(4, this.props.pixiway.pixiwayUrl)
  }
  render() {
    return (
      <div className="pixipolaview">
        <img className="imageLogo" src={logoAnniversaire}/>
        {this.props.pixiway.data[0] && this.props.pixiway.data[0].entities.media[0].media_url ? <Image src={this.props.pixiway.data[0].entities.media[0].media_url}/> : null}
        {this.props.pixiway.data[1] && this.props.pixiway.data[1].entities.media[0].media_url ? <Image src={this.props.pixiway.data[1].entities.media[0].media_url}/> : null}
        {this.props.pixiway.data[2] && this.props.pixiway.data[2].entities.media[0].media_url ? <Image src={this.props.pixiway.data[2].entities.media[0].media_url}/> : null}
        {this.props.pixiway.data[3] && this.props.pixiway.data[3].entities.media[0].media_url ? <Image src={this.props.pixiway.data[3].entities.media[0].media_url}/> : null}
        <img className="imageCta" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

PixiPolaView.defaultProps = {
}

export default PixiPolaView
