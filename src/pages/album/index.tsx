import React from 'react';
import { View, StyleSheet } from 'react-native';
import { get } from '@config/http';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigator/index';
import { FullStackNavigation } from '@navigator/index';
import { useHeaderHeight } from '@react-navigation/stack';
import AlbumHeader from './album-header';
import Tab from './tab';

type authorType = {
  name: string;
  avatar: string;
};

export type albumListType = {
  id: string;
  title: string;
  duration: string;
  playVolume: string;
  date: string;
};

export type albumType = {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl: string;
  introduction: string;
  author: authorType;
  list: Array<albumListType>;
};

interface IProps {
  navigation: FullStackNavigation;
  route: RouteProp<RootStackParamList, 'Album'>;
  headerHeight: number;
}

interface IState {
  data: albumType | null;
}

// 组件是否已经销毁
let isDestroy = false;

class Album extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount(): Promise<void> {
    isDestroy = false;
    const { route } = this.props;
    await this.getData(route.params.item.id);
  }

  componentWillUnmount(): void {
    isDestroy = true;
  }

  getData = async (id: string): Promise<void> => {
    const result = await get<albumType>(`/album/list?id=${id}`);
    if (!isDestroy) {
      this.setState({ data: result.data });
    }
  };

  goToDetails = (id: string) => {
    const { navigation } = this.props;
    navigation.navigate('Details', {
      id,
    });
  };

  render(): React.ReactElement | null {
    const { headerHeight, route } = this.props;
    const { data } = this.state;
    if (!data) {
      return null;
    }
    return (
      <View style={style.container}>
        <AlbumHeader
          headerHeight={headerHeight}
          data={{
            ...route.params.item,
            ...data.author,
            summary: data.summary,
          }}
        />
        <Tab data={data} goToDetails={this.goToDetails} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// 使用函数组件套class组件 方便使用 useHeaderHeight 的 hooks组件 useHeaderHeight获取导航栏高度
const Wrapper: React.FC<IProps> = (props) => {
  const headerHeight = useHeaderHeight();
  return <Album {...props} headerHeight={headerHeight} />;
};

export default Wrapper;
