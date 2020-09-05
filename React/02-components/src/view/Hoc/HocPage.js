import React, { Component } from 'react'

// hoc
// 是个函数，参数为组件，返回值也为组件

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props}/>
    </div>
  )
};

function Child(props) {
  return <div className="border">
    Child-{props.name}
  </div>
}


const Foo = foo(Child);

// 多次包裹就是链式调用
// const Foo = foo(foo(Child));

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo name="参数" />
      </div>
    )
  }
}
