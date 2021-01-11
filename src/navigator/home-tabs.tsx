import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '@pages/home';

const Tab = createMaterialTopTabNavigator();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#f86c1a',
        inactiveTintColor: '#999999',
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 2,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86c1a',
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: '推荐',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
