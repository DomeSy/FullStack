import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import './card.scss'

class Card extends Component {
  constructor(props){
    super(props)
    // console.log()
  }
  render() {

    return (
      <View>
        卡包
      </View>
    )
  }
}

export default Card