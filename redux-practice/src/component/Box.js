import React from 'react'
import { useSelector } from 'react-redux'

export const Box = () => {
const count = useSelector(state=>state.count)
  return (
    <div>Box 만들어봤다 {count}</div>
  )
}
