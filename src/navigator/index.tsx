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
} from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';

import Details from '@pages/details';
import IndexBottomTab from './index-bottom-tabs';
import TestBottomTab from './test-bottom-tabs';
import Category from '@pages/category';

export type RootStackParamList = {
  IndexBottomTab: undefined;
  TestBottomTab: undefined;
  Details: {
    id: number;
  };
  Category: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStatusBarHeight: StatusBar.currentHeight,
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
          headerTintColor: '#333333',
          headerTitleStyle: {
            fontSize: 14,
          },
          headerTitle: '',
          // headerLeft: () => null, // 隐藏导航栏返回按钮
        }}>
        <Stack.Screen name="IndexBottomTab" component={IndexBottomTab} />
        <Stack.Screen name="Category" component={Category} options={{ headerTitle: '分类页面' }} />
        <Stack.Screen name="TestBottomTab" component={TestBottomTab} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: '详情页面' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
