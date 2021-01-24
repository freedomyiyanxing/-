import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTabBar from '@navigator/home-tab-bar';
import Home from '@pages/home';
import { AppStore } from '@store/index';
import { HOME_INFO } from '@store/home-store/types';
import storage from '@config/storage';
import { homeCategoryListActive } from '@store/home-store/action';

type HomeParamList = {
  [key: string]: undefined;
};

interface IProps {
  homeInfo: HOME_INFO;
  handleCategoryListActive: typeof homeCategoryListActive;
}

const Tab = createMaterialTopTabNavigator<HomeParamList>();

class HomeTabs extends React.PureComponent<IProps> {
  componentDidMount(): void {
    const { handleCategoryListActive } = this.props;
    storage
      .load({
        key: 'myCategoryList',
      })
      .then((res) => {
        handleCategoryListActive(res);
      });
  }

  render(): React.ReactElement | null {
    const { homeInfo } = this.props;
    console.log('执行了几次', homeInfo.myCategoryList.length);
    return (
      <Tab.Navigator
        lazy
        tabBar={(props) => <HomeTabBar {...props} />}
        sceneContainerStyle={homeTabsStyle.sceneContainer}
        tabBarOptions={{
          scrollEnabled: true,
          activeTintColor: '#f86c1a',
          inactiveTintColor: '#333',
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
        {homeInfo.myCategoryList.map((item) => (
          <Tab.Screen
            key={item.id}
            name={item.id}
            component={Home}
            options={{
              tabBarLabel: item.name,
            }}
          />
        ))}
      </Tab.Navigator>
    );
  }
}

const homeTabsStyle = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps, {
  handleCategoryListActive: homeCategoryListActive,
})(HomeTabs);
