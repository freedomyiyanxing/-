import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import Guess from '@pages/home/guess';
import TopCarousel from '@pages/home/top-carousel';
import RenderItem from '@pages/home/list';
import { getListData, ListTypes } from '@pages/home/request';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = () => {
  const [list, setList] = useState<ListTypes | null>(null);

  const getData = (): void => {
    getListData().then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <TopCarousel />
          <Guess />
        </>
      }
      style={style.container}
      data={list?.result}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Home;
