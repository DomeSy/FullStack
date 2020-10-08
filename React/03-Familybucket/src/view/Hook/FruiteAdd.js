import React, { useState, useContext } from 'react'

// 用户输入水果，回车后水果列表增加
export default function FruiteAdd({
  // onAdd, 
  Context
}) {
  const [fname, setFname] = useState("")
  // Context
  const { fruits, setFruits } = useContext(Context)
  
  const onAddFruite = (e) => {
    if(e.key === "Enter"){
      // onAdd(fname);

      // context
      setFruits([...fruits, fname])

      setFname("")
    }
  }


  return (
    <div>
      <input type="text" value={fname} onChange={(e)=>{
        setFname(e.target.value)
      }} onKeyDown={onAddFruite}></input>
    </div>
  )
}
