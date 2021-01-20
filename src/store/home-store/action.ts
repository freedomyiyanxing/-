import { HOME_ACTIVE, HOME_INFO, HOME_SET } from './types';

export const homeSetInfo = (info: HOME_INFO): HOME_ACTIVE => ({
  type: HOME_SET,
  payload: info,
});
