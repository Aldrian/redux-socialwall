require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/PixiwayView.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class PixiwayView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.nextElem(2, this.props.pixiway.pixiwayUrl)
  }
  render() {
    return (
      <div className="pixiwayview">
        <img className="imageLogo" src={logoAnniversaire}/>
        <div className="image-0">
          {this.props.pixiway.data.length > 0 && this.props.pixiway.data[0] && this.props.pixiway.data[0].entities.media[0].media_url ? <Image src={this.props.pixiway.data[0].entities.media[0].media_url} small={false} lbotcorner={true} rtopcorner={true} ltopcorner={false}  top={false} rbotcorner={false} /> : null}
        </div>
        <div className="image-1">
          {this.props.pixiway.data.length > 0 && this.props.pixiway.data[1] && this.props.pixiway.data[1].entities.media[0].media_url ? <Image src={this.props.pixiway.data[1].entities.media[0].media_url} small={true} lbotcorner={true} rtopcorner={false} ltopcorner={false}  top={false} rbotcorner={false} /> : null}
        </div>
        <img className="imageCta" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

PixiwayView.defaultProps = {
}

export default PixiwayView
