import React, { Dispatch, SetStateAction } from 'react';
import { useState, useEffect, useReducer } from 'react';
import { get } from '@config/http';

export interface CarouselDataTypes {
  id: string;
  image: string;
  colors: Array<string>;
}

export interface GuessDataTypes {
  id: string;
  title: string;
  image: string;
}

export interface ListItemTypes {
  id: string;
  image: string;
  title: string;
  remark: string;
  played: number;
  playing: number;
}

export interface ListTypes {
  result: Array<ListItemTypes>;
  size: number;
  total: number;
}

interface ReducerState {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

interface ReducerAction {
  type: string;

  [key: string]: any;
}

export const getHomeGuessList = async () => {
  return await get<Array<GuessDataTypes>>('/home/guess');
};

export const getHomeTopCarousel = async () => {
  return await get<Array<CarouselDataTypes>>('/home/carousel');
};

export const getHomeList = async () => {
  return await get<ListTypes>('/home/list');
};

const dataFetchReducer: React.Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

interface TReturnProps<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
  setUrl: Dispatch<SetStateAction<string>>;
}

export const useDataApi = <T>(initialUrl: string): TReturnProps<T> => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isError: false,
    isLoading: false,
    data: null,
  });

  useEffect(() => {
    let didCancel = false;
    console.log('url', url);
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await get<T>(url);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData().then();

    return (): void => {
      didCancel = true;
    };
  }, [url]);

  return { ...state, setUrl };
};
