const initialState = {
  order: [
    'Pixiway',
    'Tweets',
    'Timeline',
    'Pixiway Pola',
    'Tweets',
    'Pixiway',
    'Timeline',
    'Pixiway Pola',
    'Tweets',
    'Pixiway',
    'Timeline',
    'Pixiway Pola',
    'Tweets',
    'Pixiway',
    'Tweets',
    'Timeline'
  ],
  index: 0
};

module.exports = function(state = initialState, action) {

  switch (action.type) {

    case 'GET_NEXT_SLIDE':
      {
        let newIndex = state.index
        if (state.index === state.order.length - 1) {
          newIndex = 0
        } else newIndex++
          return Object.assign({}, {
            order: state.order,
            index: newIndex
          })
      }
    default:
      {
        return state;
      }
  }
}
