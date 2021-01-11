/**
 * 标签式导航栏
 */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigation, RootStackParamList } from '@navigator/index';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

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

type Route = RouteProp<RootStackParamList, 'BottomTabs'>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const getHeaderTitle = (route: Route): string => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'homeTabs';
  switch (routeName) {
    case 'homeTabs':
      return '首页';
    case 'listen':
      return '我听';
    case 'found':
      return '发现';
    case 'account':
      return '账户';
    default:
      return '首页';
  }
};

const BottomTab: React.FC<IProps> = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  });

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

export default BottomTab;
