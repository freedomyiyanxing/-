import React from 'react';
import { View, Text } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import TouchClick from '@components/touchable/Touchable-click';

interface IProps {
  navigation: RootStackNavigation;
}

class Category extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleToHome = (): void => {
    // const { navigation } = this.props;
    // navigation.navigate('BottomTabs');
  };

  render(): React.ReactElement | null {
    return (
      <View>
        <Text>category</Text>
        <View>
          <TouchClick onPress={this.handleToHome}>
            <Text>点击去其他页面</Text>
          </TouchClick>
        </View>
      </View>
    );
  }
}

export default Category;
