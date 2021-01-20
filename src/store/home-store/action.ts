import { HOME_CAROUSE_ACTIVE, HOME_CAROUSE_INDEX } from './types';

export const homeCarouseActive = (carouseIndex: number): HOME_CAROUSE_ACTIVE => ({
  type: HOME_CAROUSE_INDEX,
  payload: carouseIndex,
});
