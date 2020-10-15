import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import './service.scss'
import { SearchTab, ServerList, UseTime, Tip } from '@components';


class Service extends Component {

  config = {
    navigationBarTitleText: '服务'
  }

  render() {
    return (
      <View className="Service">
        <SearchTab />
        <View className="img"></View>
        <UseTime />
        <View className="border" />
        <ServerList />
        <Tip />
      </View>
    )
  }
}

export default Service
