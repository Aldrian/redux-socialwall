const timeline = require('json!../jsondata/timeline.json')
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
    default: {
      return state;
    }
  }
}
