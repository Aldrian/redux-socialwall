const initialState = {
  data : [],
  pixiwayUrl : ''
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_PIXIWAY_PHOTO':
      {
        if(state[0] != action.newPhotos[0]) {
          return Object.assign({}, {
            pixiwayUrl: state.pixiwayUrl,
            data: action.newPhotos.concat(state.data)
          })
        }
      }
      case 'SET_PIXIWAY_URL':
        {
          return Object.assign({}, {
            pixiwayUrl: action.url,
            data: state.data || []
          })
        }
    default: {
      return state;
    }
  }
}
