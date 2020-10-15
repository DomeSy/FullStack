import React from 'react'
import { View } from '@tarojs/components';

import './index.scss'

function Index(){

  return (
    <View className="DTitleBig">
      <View className="list">
        <View className="text-active">热门</View>
        <View className="underline"></View>
      </View>
      <View className="list">
        <View className="text">上新</View>
        <View className="underline"></View>
      </View>
    </View>
  )
}

export default Index;
