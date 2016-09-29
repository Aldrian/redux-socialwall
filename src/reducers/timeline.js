const timeline = require('json!../assets/jsondata/timeline.json')
const alternativeTimeline = require('json!../assets/jsondata/timeline.json')
const initialState = timeline

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_TIMELINE_ELEM':
      {
        let newIndex = state.index
        if (state.index === state.data.length - 1) {
          newIndex = 0
        } else newIndex++
          return Object.assign({}, {
            data: state.data,
            index: newIndex
          })
      }
      case 'SWITCH_TIMELINE_MODE':
        {
          if (action.mode === 'off') {
            return alternativeTimeline
          }
          if (action.mode === 'on') {
            return timeline
          }
        }
    default: {
      return state;
    }
  }
}
