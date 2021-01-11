import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SnapCarousel, {
  ParallaxImage,
  Pagination,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import { viewportWidth, wp, hp } from '@utils/index';

interface IProps {
  item: string;
}

const data = [
  'https://www.twcode01.com/images/demo/demo2.jpg',
  'https://pic1.zhimg.com/v2-4bba972a094eb1bdc8cbbc55e2bd4ddf_1440w.jpg?source=172ae18b',
  'https://pic2.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b',
];

const sliderWidth = viewportWidth;
const slidWidth = wp(90);
const slidHeight = hp(26);
const itemWidth = slidWidth + wp(2) * 2;

const RenderItem: React.FC<IProps> = (
  { item },
  parallaxProps?: AdditionalParallaxProps,
) => {
  return (
    <ParallaxImage
      source={{ uri: item }}
      style={style.images}
      parallaxFactor={0.8}
      containerStyle={style.containerStyle}
      showSpinner
      spinnerColor="rgba(7,17,27,0.2)"
      {...parallaxProps}
    />
  );
};

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const onSnapToItem = (idx: number): void => {
    setIndex(idx);
  };

  return (
    <View>
      <SnapCarousel
        data={data}
        layout="default"
        renderItem={RenderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages
        loop
        onSnapToItem={onSnapToItem}
      />
      <View style={style.paginationWrapper}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.8}
          dotStyle={style.dotStyle}
          containerStyle={style.paginationStyle}
          dotContainerStyle={style.dotContainerStyle}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    width: itemWidth,
    height: slidHeight,
    borderRadius: 8,
  },
  images: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 8,
  },
  paginationWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dotContainerStyle: {
    marginVertical: 2,
    marginHorizontal: 6,
  },
});

export default Carousel;
