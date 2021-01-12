import { get } from '@config/http';

export interface CarouselDataTypes {
  id: string;
  image: string;
}

export interface GuessDataTypes {
  id: string;
  title: string;
  image: string;
}

/**
 * 轮播数据
 */
export const getCarousel = async () => {
  return await get<Array<CarouselDataTypes>>('/home/carousel');
};

/**
 * 猜你喜欢数据
 */
export const getGuess = async () => {
  return await get<Array<GuessDataTypes>>('/home/guess');
};
