import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import Home from '@pages/home';
import TouchClick from '@components/touchable/Touchable-click';

const Tab = createMaterialTopTabNavigator();

// 自定义首页 TabBar
const TabBar: React.FC<MaterialTopTabBarProps> = (props) => {
  return (
    <View style={tabBarStyle.container}>
      <LinearGradient
        colors={['#f89e28', '#f88432', '#f87b33', '#f86c1a']}
        style={tabBarStyle.gradient}
      />
      <View style={tabBarStyle.wrapper}>
        <MaterialTopTabBar {...props} style={tabBarStyle.tabBar} />
        <TouchClick style={tabBarStyle.categoryBtn}>
          <Text style={tabBarStyle.categoryText}>分类</Text>
        </TouchClick>
      </View>
      <View style={tabBarStyle.botWrapper}>
        <TouchClick style={tabBarStyle.searchBtn}>
          <Text style={tabBarStyle.categoryText}>搜素</Text>
        </TouchClick>
        <TouchClick style={tabBarStyle.historyBtn}>
          <Text style={tabBarStyle.categoryText}>历史记录</Text>
        </TouchClick>
      </View>
    </View>
  );
};

const tabBarStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(), // 获取顶部状态栏的高度
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    elevation: 0, // 设置android投影
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  categoryBtn: {
    marginTop: 6,
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  categoryText: {
    fontSize: 12,
  },
  botWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  searchBtn: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 12,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  historyBtn: {
    marginLeft: 24,
  },
});

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      lazy
      tabBar={TabBar}
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
