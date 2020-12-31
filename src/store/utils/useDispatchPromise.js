import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

function useDispatchPromise() {
  const dispatch = useDispatch()
  const callDispatch = useCallback(
    props => {
      return new Promise((resolve, reject) => {
        dispatch({ ...props, resolve, reject })
      })
    },
    [dispatch]
  )

  return callDispatch
}

export default useDispatchPromise
