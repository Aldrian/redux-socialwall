const initialState = {
  data : [],
  twitterUrl : ''
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_TWEET':
      {
        if(initialState[0] != action.newTweet) {
          return Object.assign({}, {
            twitterUrl: state.twitterUrl,
            data: [action.newTweet].concat(state.data)
          })
        }
      }
    case 'SET_TWITTER_URL':
      {
        return Object.assign({}, {
          twitterUrl: action.url,
          data: state.data || []
        })
      }
    default: {
      return state;
    }
  }
}
