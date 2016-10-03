require('normalize.css/normalize.css')
require('styles/App.scss')
require('styles/TweetView.scss')
require('styles/animate.scss')

import React from 'react'
import Image from './Image'

let logoAnniversaire = require('../assets/images/logoanniversaire.png')
let ctaPixiwayImage = require('../assets/images/ctapixiway.png')
let twitterDefault = require('../assets/images/twitterdefault.jpg')

class TweetView extends React.Component {
  constructor(props) {
    super(props)
    this.tweet = undefined
    this.hasMedia = false
    this.hasRetweetedMedia = false
  }
  componentWillMount() {
    this.props.nextElem(this.props.tweets.twitterUrl)
  }
  componentWillReceiveProps(newProps) {
    //Quick & dirty, to be refactored
    if (newProps.tweets.newTweet && newProps.tweets.data[0]) {
      this.tweet = newProps.tweets.data[0]
      if (this.tweet.entities.media) {
        this.hasMedia = true
      }
    }
    else if (!newProps.tweets.newTweet && newProps.tweets.data[newProps.tweets.oldIndex]){
      this.tweet = newProps.tweets.data[newProps.tweets.oldIndex]
      if (this.tweet.entities.media) {
        this.hasMedia = true
      }
    }
    if (!this.tweet) {
      this.props.getNextSlide()
    }
  }
  render() {
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
      <div className="tweetview" ref="view">
        <img className="imageLogo" src={logoAnniversaire}/>
        {this.tweet ? <div className="tweet-wrapper animated slideInLeft">
           <img className="user-image" src={this.tweet.user.profile_image_url}/>
           <p className="user-name">{`${this.tweet.user.name}`}</p>
           <p className="user-account">{`@${this.tweet.user.screen_name}`}</p>
           <p className="tweet">{this.tweet.full_text}</p>
        </div> : null}
        {this.hasMedia ?
          <Image className="animated slideInRight" src={this.tweet.entities.media[0].media_url} topcorner={imageProps.topcorner} lbotcorner={imageProps.lbotcorner} rbotcorner={imageProps.rbotcorner}/>
          : <Image className="animated slideInRight" src={twitterDefault} topcorner={imageProps.topcorner} lbotcorner={imageProps.lbotcorner} rbotcorner={imageProps.rbotcorner}/>}
        <img className="imageCta animated pulse" src={ctaPixiwayImage}/>
      </div>
    )
  }
}

TweetView.defaultProps = {
}

export default TweetView
