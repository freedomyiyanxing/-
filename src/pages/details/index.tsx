import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FullStackParamList } from '@navigator/index';
import { get } from '@config/http';
import { initPlayer, play, stop } from '@config/sound';
import TouchClick from '@components/touchable/Touchable-click';

interface IProps {
  route: RouteProp<FullStackParamList, 'Details'>;
}

type DetailsType = {
  id: string;
  soundUrl: string;
};

interface IState {
  data: DetailsType | null;
}

// 组件是否已经销毁
let isDestroy = false;

class Details extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    isDestroy = false;
    this.getData().then();
  }

  componentWillUnmount(): void {
    isDestroy = true;
  }

  getData = async () => {
    const result = await get<DetailsType>('/album/details');
    if (!isDestroy) {
      // this.setState({
      //   data: result.data,
      // });
      initPlayer(result.data.soundUrl).then();
    }
  };

  handlePlay = (): void => {
    play().then();
  };

  handleStop = (): void => {
    stop().then();
  };

  render(): React.ReactElement | null {
    const { route } = this.props;
    // const { data } = this.state;
    // console.log(data);
    // if (!data) {
    //   return null;
    // }

    return (
      <View style={style.container}>
        <Text>{route.params.id}</Text>
        <View style={style.wrapper}>
          <TouchClick onPress={this.handlePlay}>
            <Text>开始播放</Text>
          </TouchClick>
          <TouchClick onPress={this.handleStop}>
            <Text>暂停播放</Text>
          </TouchClick>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Details;
