const initialState = [];

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_TWEET':
      {
        if(initialState[0] != action.newTweet) {
          return [action.newTweet].concat(state)
        }
      }
    default: {
      return state;
    }
  }
}
