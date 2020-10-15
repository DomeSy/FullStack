import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import './home.scss'
import { SearchTab, Ration, Classification, Licence, Theme, ThemeService, Tip } from '@components';

class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className="Home">
        <SearchTab />
        <Ration />
        <Classification />
        <Licence />
        <Theme />
        <ThemeService />
        <Tip />
      </View>
    )
  }
}

export default Home
