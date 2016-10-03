const reducers = require('../reducers')
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { save, load } from 'redux-localstorage-simple'
module.exports = function(initialState) {
  const createStoreWithMiddleware = applyMiddleware(thunk, save())(createStore)
  const store = createStoreWithMiddleware(reducers, load(), initialState)
  //const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  //const store = createStoreWithMiddleware(reducers, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
