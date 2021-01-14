import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { get } from '@config/http';

export interface CarouselDataTypes {
  id: string;
  image: string;
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

export const useDataApi = <T>(
  initialUrl: string,
): {
  isLoading: boolean;
  isError: boolean;
  data: T;
} => {
  const [url] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isError: false,
    isLoading: false,
    data: null,
  });

  useEffect(() => {
    let didCancel = false;

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

  return state;
};
