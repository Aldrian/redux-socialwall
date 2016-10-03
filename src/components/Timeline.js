require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TimelineView.scss')
require('styles/animate.scss')

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
    const mode = this.props.timeline.mode
    let imageProps = {
      topcorner: {
        size: 'large',
        color: 'blue'
      },
      lbotcorner: {
        size: 'medium',
        color: 'green'
      },
      rbotcorner: {
        size: 'small',
        color: 'red'
      }
    }
    return (
      <div className="timelineview">
        <img className="imageLogo" src={logoAnniversaire}/>
        <div className="timeline-text animated zoomIn">
          <p>Novius life</p>
        </div>
        <div className="timeline-image">
          {timelineElem.filename ? <Image className="animated zoomIn" src={`/assets/images/${mode=='on' ? 'timelineOn' : 'timelineOff'}/${timelineElem.filename}`} topcorner={imageProps.topcorner} lbotcorner={imageProps.lbotcorner} rbotcorner={imageProps.rbotcorner}/> : null}
        </div>
        <img className="imageCta animated pulse" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

TimelineView.defaultProps = {
}

export default TimelineView
