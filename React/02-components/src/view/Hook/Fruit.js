import React, { Component, useState } from 'react'

export default class Fuites extends Component {
  render() {

    const [fruite, setFruite] = useState('草莓')

    return (
      <>
       <div>
         {
          // fruite === '' ? `请选择喜欢的水果` : `您选择的水果是${fruite}`
         }
       </div>
      </>
    )
  }
}
