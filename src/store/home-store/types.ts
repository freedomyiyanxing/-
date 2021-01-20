export const HOME_SET = 'HOME_SET'; // 首页轮播图下标

export type HOME_INFO = {
  number: number;
};

export type HOME_ACTIVE = {
  type: typeof HOME_SET;
  payload: HOME_INFO;
};
