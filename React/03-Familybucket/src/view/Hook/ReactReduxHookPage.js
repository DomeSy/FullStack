import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReactReduxHookPage() {
  const count = useSelector(({count}) => count)
  const dispatch = useDispatch();

  // const add = () => {
  //   dispatch({type: "ADD"})
  // }

  const add = useCallback(() => {
    dispatch({type: "ADD"})
  }, [])

  return (

    <div>
      ReactReduxHookPage
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  )
}
