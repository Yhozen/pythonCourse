import React, { useReducer, useContext } from 'react'
import { usePersistedContext, usePersistedReducer } from './usePersist'

const initialState = {}
export const Store = React.createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export function StoreProvider (props) {
  const globalStore = usePersistedContext(useContext(Store))
  const [ state, dispatch ] = usePersistedReducer(useReducer(reducer, globalStore))
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
