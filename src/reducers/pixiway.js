const initialState = {
  data : [],
  pixiwayUrl : '',
  newPhoto : true,
  oldIndex: 0
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_NEW_PIXIWAY_PHOTO':
      {
        if(state.data.length == 0 || state.data[0].id != action.newPhotos[0].id) {
          return Object.assign({}, {
            data: action.newPhotos.concat(state.data),
            newPhoto: true,
            oldIndex: state.oldIndex,
            pixiwayUrl: state.pixiwayUrl
          })
        }
        else {
          let _oldIndex = state.oldIndex
          if (_oldIndex === state.data.length - 1) {
            _oldIndex = 0
          } else _oldIndex++
          return Object.assign({}, {
            newPhoto: false,
            oldIndex: _oldIndex,
            pixiwayUrl: state.pixiwayUrl,
            data: state.data
          })
        }
      }
      case 'SET_PIXIWAY_URL':
        {
          return Object.assign({}, {
            pixiwayUrl: action.url,
            data: state.data,
            newPhoto : true,
            oldIndex: 0
          })
        }
    default: {
      return state;
    }
  }
}
