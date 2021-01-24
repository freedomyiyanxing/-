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
const HomeTabBar: React.FC<IProps> = (props) => {
  let { homeInfo, indicatorStyle, inactiveTintColor, navigation, ...rest } = props;
  let textStyle = tabBarStyle.blockText;
  let activeTintColor = '#f86c1a';
  if (homeInfo?.isLinearGradient) {
    textStyle = tabBarStyle.whiteText;
    activeTintColor = '#fff';
    indicatorStyle = StyleSheet.compose(indicatorStyle, { backgroundColor: '#fff' });
    inactiveTintColor = '#fff';
  }

  const handleToCategory = React.useCallback(() => {
    navigation.navigate('Category');
  }, [navigation]);

  return (
    <View style={tabBarStyle.container}>
      {homeInfo?.isLinearGradient ? (
        <LinearGradient colors={homeInfo?.carouseObjs.colors} style={tabBarStyle.gradient} />
      ) : null}
      <View style={tabBarStyle.wrapper}>
        <MaterialTopTabBar
          {...rest}
          navigation={navigation}
          activeTintColor={activeTintColor}
          indicatorStyle={indicatorStyle}
          inactiveTintColor={inactiveTintColor}
          style={tabBarStyle.tabBar}
        />
        <TouchClick style={tabBarStyle.categoryBtn} onPress={handleToCategory}>
          <Text style={{ ...tabBarStyle.text, ...textStyle }}>分类</Text>
        </TouchClick>
      </View>
      <View style={tabBarStyle.botWrapper}>
        <TouchClick style={tabBarStyle.searchBtn}>
          <Text style={{ ...tabBarStyle.text, ...textStyle }}>搜素</Text>
        </TouchClick>
        <TouchClick style={tabBarStyle.historyBtn}>
          <Text style={{ ...tabBarStyle.text, ...textStyle }}>历史记录</Text>
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
    marginTop: 8,
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
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
  text: {
    fontSize: 12,
  },
  blockText: {
    color: '#333',
  },
  whiteText: {
    color: '#fff',
  },
});

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps)(HomeTabBar);
