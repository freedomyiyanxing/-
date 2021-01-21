import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTabBar from '@navigator/home-tab-bar';
import Home from '@pages/home';

const Tab = createMaterialTopTabNavigator();

const HomeTabs: React.FC = () => {
  console.log('什么时候执行');
  return (
    <Tab.Navigator
      lazy
      tabBar={(props) => <HomeTabBar {...props} />}
      sceneContainerStyle={homeTabsStyle.sceneContainer}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#f86c1a',
        inactiveTintColor: '#999999',
        tabStyle: {
          width: 80,
          height: 40,
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

const homeTabsStyle = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default HomeTabs;
