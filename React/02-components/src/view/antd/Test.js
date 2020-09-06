import React, { Component } from 'react'
import { Rate, Button } from 'antd';
import "./test.less"


export default class test extends Component {
  render() {
    return (
      <div>
        <Rate allowHalf defaultValue={2.5} />
        <Button type="primary">Primary Button</Button>

        <div className="test">
          <p>
            我是谁
          </p>
        </div>
      </div>
    )
  }
}
