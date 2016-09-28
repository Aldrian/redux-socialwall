import {GET_NEW_TWEET} from './../const'
import ajax from 'axios'
const config = require('config')


const actionTweetRecieved = (newTweet) => {
  return { type: GET_NEW_TWEET, newTweet }
}
const fetchTweets = () => {
  return dispatch => {
    return ajax.get(config.default.twitterUrl)
      .then(response => {
        for (var i = 0; i < response.data.statuses.length; i++) {
          if(!response.data.statuses[i].retweeted_status) {
            dispatch(actionTweetRecieved(response.data.statuses[i]))
            break
          }
        }
      })
  }
}

module.exports = function () {
  return fetchTweets()
}
