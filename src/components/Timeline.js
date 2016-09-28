require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TimelineView.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../images/logoanniversaire.png')
let ctaPixiwayImage = require('../images/ctaPixiway.png')

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
        <div className="timeline-image">
          {timelineElem.image ? <Image src={timelineElem.image} small={false} lbotcorner={true} rtopcorner={false} ltopcorner={false}  top={true} rbotcorner={true}/> : null}
        </div>
        <div className="timeline-text">
          <span>{timelineElem.date}</span>
          <p>{timelineElem.title}</p>
        </div>
        <div className="timeline-dates">
          <span>{timelineElem.date}</span>
        </div>
        <img className="imageCta" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

TimelineView.defaultProps = {
}

export default TimelineView
