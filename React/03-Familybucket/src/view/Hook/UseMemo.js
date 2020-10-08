import React,{ useState } from 'react'
import MemoButton from './MemoButton'

export default function UseMemo() {
  const [name, setName] = useState('名称')
  const [content, setContent] = useState('内容')
  return (
    <>
      <h1>UseMemo</h1>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <br/>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <MemoButton name={name} >{content}</MemoButton>
    </>
  )
}
