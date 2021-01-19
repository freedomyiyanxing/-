import React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
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
  loading: boolean;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: null,
      isMore: true,
      loading: false,
    };
  }

  async componentDidMount(): Promise<void> {
    const result = await getHomeList();
    this.setState({
      data: result.data.result,
    });
  }

  loadData = async () => {
    this.setState({
      loading: true,
    });
    const result = await getHomeList();
    this.setState({
      data: result.data.result,
      loading: false,
    });
  };

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
    const { data, isMore, loading } = this.state;
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
        refreshControl={
          <RefreshControl
            colors={['#f86c1a']}
            titleColor={'#f86c1a'}
            refreshing={loading}
            onRefresh={() => {
              this.loadData().then(); //下拉刷新加载数据
            }}
          />
        }
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
