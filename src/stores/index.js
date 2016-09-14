const reducers = require('../reducers')
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
module.exports = function(initialState) {
  const store = createStore(reducers, applyMiddleware(thunk), initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
