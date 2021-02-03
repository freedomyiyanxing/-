import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FullStackNavigation, FullStackParamList } from '@navigator/index';
import { get } from '@config/http';
import { initPlayer, play, stop, getDuration } from '@config/sound';
import TouchClick from '@components/touchable/Touchable-click';
import IconFont from '@assets/iconfont';
import PlaySlider from './play-slider';
import { viewportWidth } from '@utils/index';

interface IProps {
  route: RouteProp<FullStackParamList, 'Details'>;
  navigation: FullStackNavigation;
}

type DetailsType = {
  id: string;
  soundUrl: string;
};

interface IState {
  data: DetailsType | null;
  playStatus: 'play' | 'pause'; // 播放状态
  duration: number; // 当前音乐时长
}

// 组件是否已经销毁
let isDestroy = false;

class Details extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
      duration: 0,
      playStatus: 'pause',
    };
  }

  componentDidMount(): void {
    const { route, navigation } = this.props;
    isDestroy = false;
    this.getData().then();
    navigation.setOptions({
      headerTitle: route.params.item.title,
      headerTitleStyle: {
        fontSize: 16,
        height: 40,
      },
    });
  }

  componentWillUnmount(): void {
    isDestroy = true;
    stop().then();
  }

  getData = async () => {
    const result = await get<DetailsType>('/album/details');
    await initPlayer(result.data.soundUrl);
    if (!isDestroy) {
      console.log('加载完成');
      this.setState({
        duration: getDuration(),
      });
    }
  };

  handlePlay = (): void => {
    play().then(() => {
      // 播放完成;
      this.handleStop();
    });
    this.setState({
      playStatus: 'play',
    });
    console.log('开始播放');
  };

  handleStop = (): void => {
    stop().then(() => {
      this.setState({
        playStatus: 'pause',
      });
      console.log('暂停播放');
    });
  };

  handleClick = () => {
    const { playStatus } = this.state;
    if (playStatus === 'play') {
      this.handleStop();
    } else {
      this.handlePlay();
    }
  };

  render(): React.ReactElement | null {
    const { route } = this.props;
    const { duration, playStatus } = this.state;
    return (
      <View style={style.container}>
        <View style={style.imageWrapper}>
          <Animated.Image source={{ uri: route.params.item.thumbnailUrl }} style={style.images} />
        </View>
        <PlaySlider data={{ duration, playStatus }} />
        <View style={style.wrapper}>
          <TouchClick onPress={this.handleClick}>
            <IconFont
              name={playStatus === 'play' ? 'icon-pause' : 'icon-play'}
              size={40}
              color="#fff"
            />
          </TouchClick>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: (viewportWidth - 180) / 2,
  },
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 180,
    height: 180,
    borderRadius: 8,
  },
});

export default Details;
