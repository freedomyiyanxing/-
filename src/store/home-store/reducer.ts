import { HOME_ACTIVE, HOME_INFO, HOME_SET } from '@store/home-store/types';

export const HOME_INITIAL_INFO: HOME_INFO = {
  number: 0,
};

export const homeReducer = (state = HOME_INITIAL_INFO, active: HOME_ACTIVE) => {
  switch (active.type) {
    case HOME_SET:
      return {
        ...active.payload,
      };
    default:
      return state;
  }
};
