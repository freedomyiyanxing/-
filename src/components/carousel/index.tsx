import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SnapCarousel, { ParallaxImage, Pagination, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { viewportWidth, wp, hp } from '@utils/index';
import { CarouselDataTypes } from '@pages/home/request';

interface IProps {
  item: CarouselDataTypes;
  parallaxProps?: AdditionalParallaxProps;
}

interface IPropsTypes {
  data: Array<CarouselDataTypes>;
}

const sliderWidth = viewportWidth;
const slidWidth = wp(90);
const slidHeight = hp(26);
const itemWidth = slidWidth + wp(2) * 2;

const RenderItem: React.FC<IProps> = ({ item }, parallaxProps) => {
  return (
    <ParallaxImage
      source={{ uri: item.image }}
      style={style.images}
      parallaxFactor={0.8}
      containerStyle={style.containerStyle}
      showSpinner
      spinnerColor="rgba(7,17,27,0.2)"
      {...parallaxProps}
    />
  );
};

const Carousel: React.FC<IPropsTypes> = ({ data }) => {
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
