import {SWITCH_TIMELINE_MODE} from './../const'

module.exports = function(mode) {
  return { type: SWITCH_TIMELINE_MODE, mode }
}
