import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';

import { AxiosRequestConfig } from 'axios';

export interface RequestReturnTypes<T> {
  code: number;
  data: T;
  msg: string;
}

export interface GetTypes {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
    RequestReturnTypes<T>
  >;
}

const instance: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
});

instance.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  ({ data }) => {
    if (data.code === 200) {
      return data;
    }
    console.log('错误信息 ->', data.msg);
    return Promise.reject(data.msg);
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export const get: GetTypes = async (url, params, config) => {
  return await instance.get(url, { params, ...config });
};

export default instance;
