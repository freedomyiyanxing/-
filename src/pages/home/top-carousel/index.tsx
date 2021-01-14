import React from 'react';
import SnapCarousel from '@components/carousel';
import { CarouselDataTypes, useDataApi } from '@pages/home/request';

const TopCarousel: React.FC = React.memo(() => {
  const { data, isLoading } = useDataApi<Array<CarouselDataTypes>>('/home/carousel');

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  return <SnapCarousel data={data} />;
});
export default TopCarousel;
