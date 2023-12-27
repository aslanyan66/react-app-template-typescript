import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders, AxiosInstance } from 'axios';

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const baseURL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_ROOT : 'prod-link';

const API: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config;

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response.data;

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

API.interceptors.request.use(onRequest, onRequestError);
API.interceptors.response.use(onResponse, onResponseError);

export default API;
