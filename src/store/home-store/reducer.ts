import { HOME_CAROUSE_ACTIVE, HOME_INFO, HOME_CAROUSE_INDEX } from '@store/home-store/types';

export const HOME_INITIAL_INFO: HOME_INFO = {
  carouseIndex: 0, // 轮播图滑动下标
  isLinearGradient: false, // 是否显示渐变导航栏
};

export const homeReducer = (state = HOME_INITIAL_INFO, active: HOME_CAROUSE_ACTIVE) => {
  console.log(active);
  switch (active.type) {
    case HOME_CAROUSE_INDEX:
      return {
        ...state,
        carouseIndex: active.payload,
      };
    default:
      return state;
  }
};
