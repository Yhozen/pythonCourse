import React from 'react'

const initialState = {}

export const Store = React.createContext(initialState)

function reducer (state, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export function StoreProvider (props) {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
