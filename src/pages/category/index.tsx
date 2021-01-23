import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import _ from 'lodash';
import { get } from '@config/http';
import storage from '@config/storage';
import RenderItem from './item';
import HeaderRightBtn from './header-right-btn';
import { AppStore } from '@store/index';
import { HOME_INFO } from '@store/home-store/types';
import { homeCategoryListActive } from '@store/home-store/action';

export interface CategoryDataType {
  id: string;
  name: string;
  classify?: string;
  isFreeze?: boolean;
}

interface IProps {
  navigation: RootStackNavigation;
  homeInfo: HOME_INFO;
  handleCategoryListActive: typeof homeCategoryListActive;
}

interface IState {
  myCategoryList: Array<CategoryDataType>;
  categoryList: {
    [key: string]: Array<CategoryDataType>;
  };
  isEdit: boolean;
}

let isDestroy = false;

class Category extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      myCategoryList: props.homeInfo.myCategoryList,
      categoryList: Object.create(null),
      isEdit: false, // 状态 === true ? 完成 : 编辑
    };
  }

  async componentDidMount(): Promise<void> {
    isDestroy = false;
    this.getData();
    this.setNavigation();
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
    const { isEdit } = this.state;
    if (prevState.isEdit !== isEdit) {
      this.setNavigation();
    }
  }

  componentWillUnmount(): void {
    isDestroy = true;
  }

  // 设置导航栏右侧编辑按钮
  setNavigation = (): void => {
    const { isEdit } = this.state;
    this.props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn isEdit={isEdit} onSubmit={this.handleEditClick} />,
    });
  };

  getData = async (): Promise<void> => {
    const result = await get<Array<CategoryDataType>>('/category/list');
    if (!isDestroy) {
      this.setState({
        categoryList: _.groupBy(result.data, (item) => item.classify),
      });
    }
  };

  // 编辑|完成事件
  handleEditClick = async (): Promise<void> => {
    const { navigation, handleCategoryListActive } = this.props;
    const { isEdit, myCategoryList } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
    if (isEdit) {
      await storage.save({
        key: 'myCategoryList',
        data: myCategoryList,
      });
      handleCategoryListActive(myCategoryList);
      navigation.goBack();
    }
  };

  // 长按事件
  handleLongPress = (): void => {
    this.setState({
      isEdit: true,
    });
  };

  // 点击事件
  handlePress = (item: CategoryDataType, index: number, isSelect: boolean): void => {
    // 是否是冻结
    if (item.isFreeze) {
      return;
    }
    const { isEdit, myCategoryList } = this.state;
    // 是否是可编辑状态
    if (!isEdit) {
      return;
    }
    // 是否选中或取消
    if (!isSelect) {
      this.setState({
        myCategoryList: myCategoryList.concat([item]),
      });
    } else {
      this.setState({
        myCategoryList: myCategoryList.filter((v) => v.id !== item.id),
      });
    }
  };

  render(): React.ReactElement | null {
    const { myCategoryList, categoryList, isEdit } = this.state;

    return (
      <ScrollView style={style.container}>
        <Text style={style.categoryName}>我的分类</Text>
        <View style={style.list}>
          {myCategoryList.map((item, index) => (
            <RenderItem
              isSelect
              key={item.id}
              index={index}
              isEdit={isEdit}
              item={item}
              onPress={this.handlePress}
            />
          ))}
        </View>
        {Object.keys(categoryList).map((key) => {
          const list = categoryList[key];
          return (
            <View key={key}>
              <Text style={style.categoryName}>{key}</Text>
              <View style={style.list}>
                {list.map((item, index) => {
                  if (myCategoryList.find((select) => select.id === item.id)) {
                    return null;
                  }
                  return (
                    <RenderItem
                      key={item.id}
                      item={item}
                      index={index}
                      isSelect={false}
                      isEdit={isEdit}
                      onLongPress={this.handleLongPress}
                      onPress={this.handlePress}
                    />
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f5f5f5',
  },
  categoryName: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 6,
  },
});

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps, {
  handleCategoryListActive: homeCategoryListActive,
})(Category);
