require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TweetView.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')

class TweetView extends React.Component {
  constructor(props) {
    super(props)
    this.tweet = undefined
    this.hasMedia = false
    this.hasRetweetedMedia = false
  }
  componentWillMount() {
    this.props.nextElem()
  }
  componentWillReceiveProps(newProps) {
    if (newProps.tweets[0]) {
        this.tweet = newProps.tweets[0];
        if (this.tweet.entities.media) {
          this.hasMedia = true
        }
    }
  }
  render() {
    return (
      <div className="tweetview">
        <img className="imageLogo" src={logoAnniversaire}/>
        <div className="tweet-wrapper">
          {this.tweet ? <img className="user-image" src={this.tweet.user.profile_image_url}/> : null}
          {this.tweet ? <p className="user-name">{`${this.tweet.user.name}`}</p> : null}
          {this.tweet ? <p className="user-account">{`@${this.tweet.user.screen_name}`}</p> : null}
          {this.tweet ? <p className="tweet">{this.tweet.full_text}</p> : null}
        </div>
        {this.hasMedia ? <Image src={this.tweet.entities.media[0].media_url} small={false} lbotcorner={true} rtopcorner={false} ltopcorner={false}  top={true} rbotcorner={true}/> : null}
        <img className="imageCta" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

TweetView.defaultProps = {
}

export default TweetView
