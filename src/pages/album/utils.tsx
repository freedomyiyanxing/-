// 动态的设置页面导航栏
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { Animated, StyleSheet } from 'react-native';
import { RootStackParamList } from '@navigator/index';

export default ({ route }: { route: RouteProp<RootStackParamList, 'Album'> }) => ({
  headerTitle: route.params.item.title,
  headerLeft: () => null, // 隐藏导航栏返回按钮
  headerTransparent: true, // 设置导航栏透明
  headerTitleStyle: {
    opacity: 0, // 隐藏导航栏标题
  },
  headerBackground: () => <Animated.View style={style.headerBackground} />,
});

const style = StyleSheet.create({
  headerBackground: {
    flex: 1,
    opacity: 0,
    backgroundColor: '#fff',
  },
});
