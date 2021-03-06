
// import { createStore, applyMiddleware } from 'redux'

// import rootReducer from '../reducers'

// export default function configure(initialState) {
//   const create = window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore

//   const createStoreWithMiddleware = applyMiddleware(
//   )(create)

//   const store = createStoreWithMiddleware(rootReducer, initialState)

//   if (module.hot) {
//     module.hot.accept('../reducers', () => {
//       const nextReducer = require('../reducers')
//       store.replaceReducer(nextReducer)
//     })
//   }

//   return store
// }
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
