const initialState = {
  data : [],
  twitterUrl : '',
  oldIndex : 0,
  newTweet : true
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_TWEET':
      {
        if(state.data.length == 0 || state.data[0].id != action.newTweet.id) {
          return Object.assign({}, {
            data: [action.newTweet].concat(state.data),
            newTweet: true,
            oldIndex: state.oldIndex,
            twitterUrl: state.twitterUrl
          })
        }
        else {
          let _oldIndex = state.oldIndex
          if (_oldIndex === state.data.length - 1) {
            _oldIndex = 0
          } else _oldIndex++
          return Object.assign({}, {
            newTweet: false,
            oldIndex: _oldIndex,
            data: state.data,
            twitterUrl: state.twitterUrl
          })
        }
      }
    case 'SET_TWITTER_URL':
      {
        return Object.assign({}, {
          twitterUrl: action.url,
          data: state.data || [],
          newPhoto: true,
          oldIndex: 0
        })
      }
    default: {
      return state;
    }
  }
}
