import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import TouchClick from '@components/touchable/Touchable-click';
import { AppStore } from '@store/index';
import { HOME_INFO } from '@store/home-store/types';

type IProps = MaterialTopTabBarProps & { homeInfo?: HOME_INFO };

// 自定义首页 TabBar
const HomeTabBar: React.FC<IProps> = ({ homeInfo, ...rest }) => (
  <View style={tabBarStyle.container}>
    {homeInfo?.isLinearGradient ? (
      <LinearGradient colors={homeInfo?.carouseObjs.colors} style={tabBarStyle.gradient} />
    ) : null}
    <View style={tabBarStyle.wrapper}>
      <MaterialTopTabBar {...rest} style={tabBarStyle.tabBar} />
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

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps)(HomeTabBar);
