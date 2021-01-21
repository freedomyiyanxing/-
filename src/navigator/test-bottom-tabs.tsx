/**
 * 标签式导航栏
 */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigation, RootStackParamList } from '@navigator/index';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';

import Test1 from '@pages/test/test-1';
import Test2 from '@pages/test/test-2';
import Test3 from '@pages/test/test-3';
import IconFont from '@assets/iconfont';

type RootTabParamList = {
  test1: undefined;
  test2: undefined;
  test3: undefined;
};

type Route = RouteProp<RootStackParamList, 'TestBottomTab'>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const getHeaderObjs = (route: Route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'homeTabs';
  switch (routeName) {
    case 'test1':
      return '测试1';
    case 'test2':
      return '测试2';
    case 'test3':
      return '测试3';
    default:
      return '测试1';
  }
};

const TestBottomTab: React.FC<IProps> = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderObjs(route), // 设置标题文字
    });
  }, [navigation, route]);
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f89026',
          inactiveTintColor: '#999999',
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="test1"
          component={Test1}
          options={{
            tabBarLabel: '测试1',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-index" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="test2"
          component={Test2}
          options={{
            tabBarLabel: '测试2',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-wo-ting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="test3"
          component={Test3}
          options={{
            tabBarLabel: '测试3',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-fa-xian" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TestBottomTab;
