import React, { useEffect, useState } from 'react';
import SnapCarousel from '@components/carousel';
import { CarouselDataTypes, getCarousel } from '@pages/home/request';

const TopCarousel: React.FC = () => {
  const [data, setData] = useState<Array<CarouselDataTypes> | []>([]);

  useEffect(() => {
    getCarousel().then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data.length) {
    return null;
  }
  return <SnapCarousel data={data} />;
};
export default TopCarousel;
