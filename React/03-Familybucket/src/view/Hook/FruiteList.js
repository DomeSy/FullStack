import React from 'react'

export default function FruiteList({ fruits, setFruit }) {
  return (
    <ul>
      {
        fruits.map((item,index) => <li onClick={()=>{
          setFruit(item)
        }} key={index}>{item}</li>)
      }
    </ul>
  )
}
