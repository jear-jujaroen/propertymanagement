import { createStore } from 'redux'

import rootReducer from './reducers/reducers'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log('store changed ++> ', store.getState())
})

export default store
