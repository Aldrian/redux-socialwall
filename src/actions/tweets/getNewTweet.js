import {GET_NEW_TWEET} from './../const'
import ajax from 'axios'
const config = require('config')


const actionTweetRecieved = (newTweet) => {
  return { type: GET_NEW_TWEET, newTweet }
}
const fetchTweets = () => {
  return dispatch => {
    return ajax.get(config.default.twitterUrl)
      .then(response => dispatch(actionTweetRecieved(response.data.statuses[0])))
  }
}

module.exports = function () {
  return fetchTweets()
}
