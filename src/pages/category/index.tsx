import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import { get } from '@config/http';

interface CategoryDataType {
  id: string;
  name: string;
  classify?: string;
}

interface IProps {
  navigation: RootStackNavigation;
}

interface IState {
  myCategoryList: Array<CategoryDataType> | null;
  categoryList: Array<CategoryDataType> | null;
}

let isDestroy = false;

const defaultCategoryList = [
  {
    id: '0',
    name: '推荐',
  },
  {
    id: '1',
    name: 'Vip',
  },
];

class Category extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      myCategoryList: defaultCategoryList,
      categoryList: null,
    };
  }

  async componentDidMount(): Promise<void> {
    isDestroy = false;
    this.getData();
  }

  componentWillUnmount(): void {
    isDestroy = true;
  }

  getData = async (): Promise<void> => {
    const result = await get<Array<CategoryDataType>>('/category/list');
    if (!isDestroy) {
      this.setState({
        categoryList: result.data,
      });
    }
  };

  renderItem = (item: CategoryDataType) => (
    <View key={item.id}>
      <Text>{item.name}</Text>
    </View>
  );

  render(): React.ReactElement | null {
    const { myCategoryList, categoryList } = this.state;
    console.log(myCategoryList);
    return (
      <ScrollView style={style.container}>
        <Text>我的分类</Text>
        <View>{myCategoryList?.map(this.renderItem)}</View>
        <View>
          <Text>全部分类</Text>
          <View>{categoryList?.map(this.renderItem)}</View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Category;
