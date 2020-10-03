import React, { Component } from 'react'
import { connect } from 'dva'
import { Table } from 'antd'

const colums = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: "name"
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: "age"
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: "city"
  }
]

// @connect(state => ({state}))
@connect(({ example }) => ({ example }), {
  getProductData: payload => ({ type: 'example/getProductData', payload })
})
class ExamplePage extends Component {

  dataSearch = () => {
    // 异步获取数据
    this.props.getProductData()
  }

  render() {
    console.log(this.props,'props')
    const { data } = this.props.example
    return (
      <div>
        ExamplePage
        <button onClick={this.dataSearch}>seach</button>
        <Table columns={colums} dataSource={data} />
      </div>
    )
  }
}

export default ExamplePage
