import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import SnapCarousel from '@components/carousel/index';

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
    <View style={style.container}>
      <SnapCarousel />
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

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Home;
