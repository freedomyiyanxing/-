import { Dimensions } from 'react-native';

// 获取当前屏幕的高度宽度
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// 根据百分比获取宽度
const wp = (percentage: number): number => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

// 根据百分比获取高度
const hp = (percentage: number): number => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};

export { viewportHeight, viewportWidth, wp, hp };

// 处理时间格式  (266.1111 => 04:44)
export const filterTime = (time: number | any): string => {
  if (!time || typeof time !== 'number') {
    return '0';
  }
  const m = parseInt(time / 60 + '', 10);
  const s = parseInt((time % 60) + '', 10);

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
};
