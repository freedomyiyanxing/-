import { CategoryDataType } from '@pages/category';

export const HOME_CAROUSE_INDEX = 'HOME_CAROUSE_INDEX'; // 首页轮播图下标
export const HOME_IS_LINEAR_GRADIENT = 'HOME_IS_LINEAR_GRADIENT'; // 首页滑动判断
export const HOME_CATEGORY_LIST = 'HOME_CATEGORY_LIST'; // 首页顶部导航分类数据

export type CarouseObjs = {
  carouseIndex: number; // 轮播图滑动下标
  colors: Array<string>;
};

export type HOME_INFO = {
  carouseObjs: CarouseObjs;
  isLinearGradient: boolean; // 是否显示渐变导航栏
  myCategoryList: Array<CategoryDataType>;
};

export type HOME_CAROUSE_ACTIVE = {
  type: typeof HOME_CAROUSE_INDEX;
  payload: CarouseObjs;
};

export type HOME_IS_LINEAR_GRADIENT_ACTIVE = {
  type: typeof HOME_IS_LINEAR_GRADIENT;
  payload: boolean;
};

export type HOME_CATEGORY_LIST_ACTIVE = {
  type: typeof HOME_CATEGORY_LIST;
  payload: Array<CategoryDataType>;
};

export type ACTIVE =
  | HOME_CAROUSE_ACTIVE
  | HOME_IS_LINEAR_GRADIENT_ACTIVE
  | HOME_CATEGORY_LIST_ACTIVE;
