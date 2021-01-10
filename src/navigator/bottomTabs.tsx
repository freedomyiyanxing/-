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

const Stack = createBottomTabNavigator<RootTabParamList>();

const getHeaderTitle = (route: Route): string => {
  // const routeName = route.state
  //   ? route.state.routes[route.state.index].name
  //   : route.params?.screen || 'home';
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
      <Stack.Navigator
        tabBarOptions={{
          activeTintColor: '#f83819',
        }}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: '首页',
          }}
        />
        <Stack.Screen
          name="listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
          }}
        />
        <Stack.Screen
          name="found"
          component={Found}
          options={{
            tabBarLabel: '发现',
          }}
        />
        <Stack.Screen
          name="account"
          component={Account}
          options={{
            tabBarLabel: '我的',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default BottomTab;
