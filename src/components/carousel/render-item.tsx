import React from 'react';
import { StyleSheet } from 'react-native';
import { ParallaxImage, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { wp, hp, viewportWidth } from '@utils/index';
import { CarouselDataTypes } from '@pages/home/request';

interface IProps {
  item: CarouselDataTypes;
  parallaxProps?: AdditionalParallaxProps;
}

const slidWidth = wp(90);
export const sliderWidth = viewportWidth;
export const slidHeight = hp(26);
export const itemWidth = slidWidth + wp(2) * 2;

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
});

export default RenderItem;
