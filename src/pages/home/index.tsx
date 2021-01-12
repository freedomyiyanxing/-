import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackNavigation } from '@navigator/index';
import SnapCarousel from '@components/carousel/index';
import { getCarousel, CarouselDataTypes } from '@pages/home/request';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = ({ navigation }) => {
  const [carouselData, setCarouselData] = useState<
    Array<CarouselDataTypes> | []
  >([]);

  useEffect(() => {
    getCarousel().then((res) => {
      setCarouselData(res.data);
    });
  }, []);

  const onPress = (): void => {
    navigation.navigate('Details', {
      id: 100,
    });
  };

  return (
    <View style={style.container}>
      {carouselData.length ? <SnapCarousel data={carouselData} /> : null}
      <View>
        <Text>Home1</Text>
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
