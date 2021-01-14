import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import Guess from '@pages/home/guess';
import TopCarousel from '@pages/home/top-carousel';
import RenderItem from '@pages/home/list';
import { ListTypes, useDataApi } from '@pages/home/request';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = () => {
  const { data, isLoading } = useDataApi<ListTypes>('/home/list');

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const handleEndReached = (): void => {
    console.log('加载更多11');
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <TopCarousel />
          <Guess />
        </>
      }
      style={style.container}
      data={data.result}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.2}
      onEndReached={handleEndReached}
    />
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Home;
