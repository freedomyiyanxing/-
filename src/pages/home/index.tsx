import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import Guess from '@pages/home/guess';
import TopCarousel from '@pages/home/top-carousel';
import RenderItem from '@pages/home/list';
import Loading from '@components/loading';
import NoMore from '@components/no-more';
import { getHomeList, ListItemTypes } from '@pages/home/request';

interface IProps {
  navigation: RootStackNavigation;
}

interface IState {
  data: Array<ListItemTypes> | null;
  isMore: boolean;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: null,
      isMore: true,
    };
  }

  async componentDidMount(): Promise<void> {
    const result = await getHomeList();
    this.setState({
      data: result.data.result,
    });
  }

  handleEndReached = async () => {
    const { data, isMore } = this.state;
    if (!isMore) {
      return;
    }
    const result = await getHomeList();
    this.setState(
      {
        data: data?.concat(result.data.result) as Array<ListItemTypes>,
      },
      () => {
        if ((this.state.data as Array<ListItemTypes>).length >= result.data.total) {
          this.setState({
            isMore: false,
          });
        }
      },
    );
  };

  render() {
    const { data, isMore } = this.state;
    return (
      <FlatList
        ListHeaderComponent={
          <>
            <TopCarousel />
            <Guess />
          </>
        }
        style={style.container}
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.2}
        onEndReached={this.handleEndReached}
        ListFooterComponent={isMore ? <Loading /> : <NoMore />}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Home;
