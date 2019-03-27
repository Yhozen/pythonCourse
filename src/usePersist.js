/* snippet from f/react-hooks-todo-app */
import { useEffect } from 'react'

const { localStorage } = window

export function usePersistedContext (context, key = 'state') {
  const persistedContext = localStorage.getItem(key)
  return persistedContext ? JSON.parse(persistedContext) : context
}

export function usePersistedReducer ([state, dispatch], key = 'state') {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state])
  return [state, dispatch]
}
