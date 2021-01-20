export const HOME_CAROUSE_INDEX = 'HOME_CAROUSE_INDEX'; // 首页

export type HOME_INFO = {
  carouseIndex: number; // 轮播图滑动下标
  isLinearGradient: boolean; // 是否显示渐变导航栏
};

export type HOME_CAROUSE_ACTIVE = {
  type: typeof HOME_CAROUSE_INDEX;
  payload: number;
};
