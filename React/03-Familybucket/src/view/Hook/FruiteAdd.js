import React, { useEffect, useState } from 'react'

// 用户输入水果，回车后水果列表增加
export default function FruiteAdd({onAdd}) {
  const [fname, setFname] = useState("")
  
  const onAddFruite = (e) => {
    if(e.key === "Enter"){
      onAdd(fname);
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
