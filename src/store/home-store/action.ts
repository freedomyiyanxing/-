import {
  CarouseObjs,
  HOME_CAROUSE_ACTIVE,
  HOME_CAROUSE_INDEX,
  HOME_IS_LINEAR_GRADIENT_ACTIVE,
  HOME_IS_LINEAR_GRADIENT,
  HOME_CATEGORY_LIST_ACTIVE,
  HOME_CATEGORY_LIST,
} from './types';
import { CategoryDataType } from '@pages/category';

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

export const homeCategoryListActive = (
  list: Array<CategoryDataType>,
): HOME_CATEGORY_LIST_ACTIVE => ({
  type: HOME_CATEGORY_LIST,
  payload: list,
});
