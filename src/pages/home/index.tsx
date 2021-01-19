import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import Guess from '@pages/home/guess';
import TopCarousel from '@pages/home/top-carousel';
import RenderItem from '@pages/home/list';
import { getHomeList, ListItemTypes } from '@pages/home/request';

interface IProps {
  navigation: RootStackNavigation;
}

interface IState {
  data: Array<ListItemTypes> | null;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount(): Promise<void> {
    const result = await getHomeList();
    this.setState({
      data: result.data.result,
    });
  }

  handleEndReached = async () => {
    const { data } = this.state;
    const result = await getHomeList();
    this.setState({
      data: data?.concat(result.data.result) as Array<ListItemTypes>,
    });
  };

  render() {
    const { data } = this.state;
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
