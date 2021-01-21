/**
 * 标签式导航栏
 */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigation, RootStackParamList } from '@navigator/index';
import { RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Listen from '@pages/listen';
import Found from '@pages/found';
import Account from '@pages/account';
import IconFont from '@assets/iconfont';
import HomeTabs from '@navigator/home-tabs';

type RootTabParamList = {
  homeTabs: undefined;
  listen: undefined;
  found: undefined;
  account: undefined;
};

type Route = RouteProp<RootStackParamList, 'IndexBottomTab'>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

type HeaderObj = {
  headerTitle: string;
  headerTransparent: boolean;
};

const getHeaderObjs = (route: Route): HeaderObj => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'homeTabs';
  switch (routeName) {
    case 'homeTabs':
      return {
        headerTitle: '',
        headerTransparent: true,
      };
    case 'listen':
      return {
        headerTitle: '我听',
        headerTransparent: false,
      };
    case 'found':
      return {
        headerTitle: '发现',
        headerTransparent: false,
      };
    case 'account':
      return {
        headerTitle: '账户',
        headerTransparent: false,
      };
    default:
      return {
        headerTitle: '',
        headerTransparent: false,
      };
  }
};

const IndexBottomTab: React.FC<IProps> = ({ navigation, route }) => {
  useEffect(() => {
    const { headerTransparent, headerTitle } = getHeaderObjs(route);
    navigation.setOptions({
      headerTransparent, // 隐藏标题栏背景色
      headerTitle, // 设置标题文字
    });
  }, [navigation, route]);

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86c1a',
          inactiveTintColor: '#999999',
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="homeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-index" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-wo-ting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-fa-xian" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({ color, size }): React.ReactNode => (
              <IconFont name="icon-wo-de" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default IndexBottomTab;
