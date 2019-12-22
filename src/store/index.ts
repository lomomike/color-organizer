import { createStore, combineReducers, applyMiddleware, compose, Store, Dispatch, Middleware, MiddlewareAPI } from 'redux'
import { colors, Action } from './reducers'
import * as stateData from '../../data/initialState'

let console = window.console

const logger : Middleware = (store : MiddlewareAPI) => (next : Dispatch) => (action : Action) => {
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver : Middleware = (store : MiddlewareAPI) => (next : Dispatch) => (action : Action) => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(() => {}) : compose;

const storeFactory = (initialState=stateData) =>
    composeEnhancers(applyMiddleware(logger, saver))(createStore)(
        combineReducers({colors }),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    )

export default storeFactory