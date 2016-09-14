require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TimelineView.scss')

import React from 'react'

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
        <p>{timelineElem.date}</p>
        <p>{timelineElem.title}</p>
      </div>
    )
  }
}

TimelineView.defaultProps = {
}

export default TimelineView
