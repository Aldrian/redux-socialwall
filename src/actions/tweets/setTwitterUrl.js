import {SET_TWITTER_URL} from './../const'

module.exports = function(url) {
  return { type: SET_TWITTER_URL, url }
}
