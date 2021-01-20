import {
  CarouseObjs,
  HOME_CAROUSE_ACTIVE,
  HOME_CAROUSE_INDEX,
  HOME_IS_LINEAR_GRADIENT_ACTIVE,
  HOME_IS_LINEAR_GRADIENT,
} from './types';

export const homeCarouseActive = (carouseObjs: CarouseObjs): HOME_CAROUSE_ACTIVE => ({
  type: HOME_CAROUSE_INDEX,
  payload: carouseObjs,
});

export const homeIsLinearGradientActive = (
  isLinearGradient: boolean,
): HOME_IS_LINEAR_GRADIENT_ACTIVE => ({
  type: HOME_IS_LINEAR_GRADIENT,
  payload: isLinearGradient,
});
