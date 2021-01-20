import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import SnapCarousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselDataTypes } from '@pages/home/request';
import RenderItem, { itemWidth, sliderWidth } from './render-item';
import { AppStore } from '@store/index';
import { HOME_INFO } from '@store/home-store/types';
import { homeCarouseActive } from '@store/home-store/action';

interface IPropsTypes {
  data: Array<CarouselDataTypes>;
  homeInfo?: HOME_INFO;
  handleCarouseActive?: typeof homeCarouseActive;
}

const Carousel: React.FC<IPropsTypes> = ({ data, homeInfo, handleCarouseActive }) => {
  const onSnapToItem = (idx: number): void => {
    if (handleCarouseActive) {
      handleCarouseActive(idx);
    }
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
          activeDotIndex={(homeInfo as HOME_INFO).carouseIndex}
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

const mapStateProps = (state: AppStore): HOME_INFO | object => ({
  homeInfo: state.homeInfo,
});

export default connect(mapStateProps, {
  handleCarouseActive: homeCarouseActive,
})(Carousel);
