import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Listen: React.FC<IProps> = ({ navigation }) => {
  const onPress = (): void => {
    navigation.navigate('TestBottomTab');
  };

  return (
    <View>
      <View>
        <Text>Listen</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text>跳转到测试分类页面</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Listen;
