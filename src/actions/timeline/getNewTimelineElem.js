import {GET_NEW_TIMELINE_ELEM} from './../const'

module.exports = function(amount) {
  return { type: GET_NEW_TIMELINE_ELEM, amount }
}
