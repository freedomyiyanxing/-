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

export interface ListItemTypes {
  id: string;
  image: string;
  title: string;
  remark: string;
  played: number;
  playing: number;
}

export interface ListTypes {
  result: Array<ListItemTypes>;
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

/**
 * 列表数据
 */
export const getListData = async () => {
  return await get<ListTypes>('/home/list');
};
