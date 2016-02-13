import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import reduxRecord from 'redux-test-recorder';

const record = reduxRecord({ reducer: rootReducer, includeReducer: false });
export const recordProps = record.props;

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(record.middleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}


