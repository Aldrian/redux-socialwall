require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TweetView.scss')

import React from 'react'

let logoAnniversaire = require('../images/logoanniversaire.png')
let ctaPixiwayImage = require('../images/ctaPixiway.png')

class TweetView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.nextElem()
  }
  render() {
    return (
      <div className="tweetview">
        {this.props.tweets[0]? <p>{this.props.tweets[0].text}</p> : null}
        {this.props.tweets[0] && this.props.tweets[0].entities.media[0].media_url ? <img src={this.props.tweets[0].entities.media[0].media_url}/> : null}
      </div>
    )
  }
}

TweetView.defaultProps = {
}

export default TweetView
