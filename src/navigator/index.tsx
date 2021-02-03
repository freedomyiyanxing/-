/**
 * 堆栈式导航栏
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import IconFont from '@assets/iconfont';

// 三级标签导航
import IndexBottomTab from './index-bottom-tabs';
// 三级标签导航
import TestBottomTab from './test-bottom-tabs';
import Category from '@pages/category';
import Album, { albumListType } from '@pages/album';
import Details from '@pages/details';

import getAlbumOptions from '@pages/album/utils';

// 定义导航页面类型
export type RootStackParamList = {
  IndexBottomTab: undefined;
  TestBottomTab: undefined;
  Category: undefined;
  Details: {
    item: albumListType;
  };
  Album: {
    item: {
      id: string;
      title: string;
      image: string;
    };
  };
};

// 定义导航类型
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

// 创建Stack导航
const Stack = createStackNavigator<RootStackParamList>();

// 二级导航
const RootStackScreen: React.FC = () => (
  <Stack.Navigator
    headerMode="float"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      headerStatusBarHeight: StatusBar.currentHeight,
      headerBackTitleVisible: false,
      headerTintColor: '#333333',
      headerTitleStyle: {
        fontSize: 14,
      },
      headerTitle: '',
      headerStyle: {
        height: 60,
        backgroundColor: '#f88c16',
        ...Platform.select({
          android: {
            elevation: 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
        }),
      },
    }}>
    <Stack.Screen name="IndexBottomTab" component={IndexBottomTab} />
    <Stack.Screen name="TestBottomTab" component={TestBottomTab} />
    <Stack.Screen name="Category" component={Category} options={{ headerTitle: '分类页面' }} />
    <Stack.Screen name="Album" component={Album} options={getAlbumOptions} />
  </Stack.Navigator>
);

// 定义导航页面类型
export type FullStackParamList = {
  Root: undefined;
  Details: {
    item: albumListType;
  };
};

// 定义导航类型
export type FullStackNavigation = StackNavigationProp<FullStackParamList>;

// 创建Stack导航
const FullStack = createStackNavigator<FullStackParamList>();

// 二级导航
const FullStackScreen: React.FC = () => (
  // 定义全屏模式导航
  <FullStack.Navigator
    mode="modal"
    headerMode="screen"
    screenOptions={{
      headerTitleAlign: 'center',
      gestureEnabled: true, // 手势关闭
      ...TransitionPresets.RevealFromBottomAndroid, // 页面关闭过渡动画
      headerBackTitleVisible: false, // 隐藏ios返回标题
    }}>
    <FullStack.Screen name="Root" component={RootStackScreen} options={{ headerShown: false }} />
    <FullStack.Screen
      name="Details"
      component={Details}
      options={{
        headerTintColor: '#fff',
        headerTitle: '',
        // 隐藏标题栏
        headerTransparent: true,
        // 设置全屏背景色
        cardStyle: { backgroundColor: '#807c66' },
        // 设置导航返回按钮
        headerBackImage: ({ tintColor }) => (
          <IconFont
            name="icon-arrow-down"
            size={20}
            color={tintColor}
            style={style.headerBackImage}
          />
        ),
      }}
    />
  </FullStack.Navigator>
);

// 一级导航
const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <FullStackScreen />
    </NavigationContainer>
  );
};

/**
 *
 *
 * */
const style = StyleSheet.create({
  headerBackImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8, // 设置不同平台的样式
    marginTop: 0,
  },
});

export default Navigator;
