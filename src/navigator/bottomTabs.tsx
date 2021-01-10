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

import Home from '@pages/home';
import Listen from '@pages/listen';
import Found from '@pages/found';
import Account from '@pages/account';

type RootTabParamList = {
  home: undefined;
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
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';
  switch (routeName) {
    case 'home':
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
          activeTintColor: '#f83819',
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: '首页',
          }}
        />
        <Tab.Screen
          name="listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
          }}
        />
        <Tab.Screen
          name="found"
          component={Found}
          options={{
            tabBarLabel: '发现',
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            tabBarLabel: '我的',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
