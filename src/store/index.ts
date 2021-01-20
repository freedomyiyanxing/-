import { combineReducers, createStore } from 'redux';
import { homeReducer, HOME_INITIAL_INFO } from './home-store/reducer';

const rootReducers = combineReducers({
  homeInfo: homeReducer,
});

export type AppStore = ReturnType<typeof rootReducers>;

export default createStore(rootReducers, {
  homeInfo: HOME_INITIAL_INFO,
});
