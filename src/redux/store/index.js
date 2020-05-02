import { createStore } from 'redux'
import reducers from '../reducers'

export const getStore = (reducer = reducers) => {
    return createStore(reducer, {})
}

export default getStore;