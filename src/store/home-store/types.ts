export const HOME_CAROUSE_INDEX = 'HOME_CAROUSE_INDEX'; // 首页
export const HOME_IS_LINEAR_GRADIENT = 'HOME_IS_LINEAR_GRADIENT'; // 首页

export type CarouseObjs = {
  carouseIndex: number; // 轮播图滑动下标
  colors: Array<string>;
};

export type HOME_INFO = {
  carouseObjs: CarouseObjs;
  isLinearGradient: boolean; // 是否显示渐变导航栏
};

export type HOME_CAROUSE_ACTIVE = {
  type: typeof HOME_CAROUSE_INDEX;
  payload: CarouseObjs;
};

export type HOME_IS_LINEAR_GRADIENT_ACTIVE = {
  type: typeof HOME_IS_LINEAR_GRADIENT;
  payload: boolean;
};

export type ACTIVE = HOME_CAROUSE_ACTIVE | HOME_IS_LINEAR_GRADIENT_ACTIVE;
