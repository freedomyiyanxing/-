import React from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { FlatList, RefreshControl, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import Guess from '@pages/home/guess';
import TopCarousel from '@pages/home/top-carousel';
import ListItem from '@pages/home/list';
import Loading from '@components/loading';
import NoMore from '@components/no-more';
import { getHomeList, ListItemTypes } from '@pages/home/request';
import { slidHeight } from '@components/carousel/render-item';
import { GuessDataTypes } from '@pages/home/request';
import { AppStore } from '@store/index';
import { HOME_INFO } from '@store/home-store/types';
import { homeIsLinearGradientActive } from '@store/home-store/action';

interface IProps {
  navigation: RootStackNavigation;
  homeInfo?: HOME_INFO;
  handleIsLinearGradientActive?: typeof homeIsLinearGradientActive;
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

  componentDidMount(): void {
    getHomeList().then((result) => {
      this.setState({
        data: result.data.result,
      });
    });

    // 关闭启动页
    SplashScreen.hide();
  }

  loadData = async () => {
    this.setState({
      loading: true,
      isMore: true,
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

  handleOnScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { handleIsLinearGradientActive, homeInfo } = this.props;
    const { y } = nativeEvent.contentOffset;
    const curIsHidden = y < slidHeight;
    if (handleIsLinearGradientActive && curIsHidden !== homeInfo?.isLinearGradient) {
      handleIsLinearGradientActive(curIsHidden);
    }
  };

  // 跳转到频道页面
  handleGoToAlbum = (item: GuessDataTypes | ListItemTypes): void => {
    const { navigation } = this.props;
    navigation.navigate('Album', { item });
  };

  renderItem = ({ item }: { item: ListItemTypes }) => {
    const handlePress = (data: ListItemTypes): void => {
      this.handleGoToAlbum(data);
    };

    return <ListItem onPress={handlePress} item={item} />;
  };

  render() {
    const { data, isMore, loading } = this.state;
    return (
      <FlatList
        ListHeaderComponent={
          <>
            <TopCarousel />
            <Guess goToAlbum={this.handleGoToAlbum} />
          </>
        }
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.2}
        onEndReached={this.handleEndReached}
        ListFooterComponent={isMore ? <Loading /> : <NoMore />}
        onScroll={this.handleOnScroll}
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

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps, {
  handleIsLinearGradientActive: homeIsLinearGradientActive,
})(Home);
