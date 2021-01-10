import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = ({ navigation }) => {
  const onPress = (): void => {
    navigation.navigate('Details', {
      id: 100,
    });
  };

  return (
    <View>
      <View>
        <Text>Home</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text>点击跳转到详情页面</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
