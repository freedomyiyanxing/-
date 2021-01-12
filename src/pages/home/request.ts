import { get } from '@config/http';

export interface CarouselDataTypes {
  id: string;
  image: string;
}

export const getCarousel = async () => {
  return await get<Array<CarouselDataTypes>>('/home/carousel');
};
