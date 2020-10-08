import React,{useState, useCallback} from 'react'

export default function UseCallback() {

  const [count, setCount] = useState(0)

  // const add = count + 1;
  const add = useCallback(() => count + 1, [count])
  
  return (
    <div>
      useCallBack
      <div>
        点击次数： {count}
        <br />
        次数加1 ：{ add() }
        <br />
        <button onClick={() => { setCount(count + 1)}}>点我</button>

      </div>
    </div>
  )
}
