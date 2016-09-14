require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/PixiwayView.scss')

import React from 'react'

let logoAnniversaire = require('../images/logoanniversaire.png')
let ctaPixiwayImage = require('../images/ctaPixiway.png')

class PixiwayView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.nextElem(1)
  }
  render() {
    return (
      <div className="piwiwayview">
          {this.props.pixiway[0] && this.props.pixiway[0].entities.media[0].media_url ? <img src={this.props.pixiway[0].entities.media[0].media_url}/> : null}
      </div>
    )
  }
}

PixiwayView.defaultProps = {
}

export default PixiwayView
