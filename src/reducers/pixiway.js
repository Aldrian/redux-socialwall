const initialState = [];

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_PIXIWAY_PHOTO':
      {
        if(state[0] != action.newPhotos[0]) {
          return action.newPhotos.concat(state)
        }
      }
    default: {
      return state;
    }
  }
}
