import React from 'react';
import { Dimensions, Platform, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Introduction from './introduction';
import List from './list';
import { albumListType, albumType } from './index';
import { SceneRendererProps } from 'react-native-tab-view/lib/typescript/src/types';

interface IProps {
  data: albumType;
  goToDetails: (item: albumListType) => void;
}

const initialLayout = {
  width: Dimensions.get('window').width,
};

const Tab: React.FC<IProps> = ({ data, goToDetails }) => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'introduction', title: '简介' },
    { key: 'albums', title: '节目' },
  ]);

  const renderScene = SceneMap({
    introduction: () => <Introduction introduction={data.introduction} />,
    albums: () => <List data={data.list} goToDetails={goToDetails} />,
  });

  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={RenderTabBar}
    />
  );
};

interface IState {
  routes: Array<{ key: string; title: string }>;
  index: number;
}

const RenderTabBar: React.FC<SceneRendererProps & { navigationState: IState }> = (props) => (
  <TabBar
    {...props}
    scrollEnabled
    style={style.tabBar}
    tabStyle={style.tabStyle}
    indicatorStyle={style.indicator}
    renderLabel={({ route }) => <Text style={style.labelStyle}>{route.title}</Text>}
  />
);

const style = StyleSheet.create({
  tabStyle: {
    width: 60,
    minHeight: 34,
    padding: 0,
  },
  labelStyle: {
    color: '#333',
    fontSize: 12,
    margin: 0,
  },
  tabBar: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e3e3e3',
      },
    }),
  },
  indicator: {
    backgroundColor: '#f86c1a',
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderColor: '#fff',
  },
});

export default Tab;
