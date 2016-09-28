require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TimelineView.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class TimelineView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.nextElem()
  }
  render() {
    const timelineElem = this.props.timeline.data[this.props.timeline.index]

    return (
      <div className="timelineview">
        <img className="imageLogo" src={logoAnniversaire}/>
        <div className="timeline-text">
          <p>Novius life</p>
        </div>
        <div className="timeline-image">
          {timelineElem.filename ? <Image src={`/assets/images/timelineOn/${timelineElem.filename}`} small={false} lbotcorner={true} rtopcorner={false} ltopcorner={false}  top={true} rbotcorner={true}/> : null}
        </div>
        <img className="imageCta" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

TimelineView.defaultProps = {
}

export default TimelineView
