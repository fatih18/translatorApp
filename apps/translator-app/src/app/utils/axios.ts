import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://libretranslate.com/`,
});

export const mapParamsToUrlSearchParams = (
  input?: Object,
  ...exclude: string[]
) => {
  if (!input) return null;

  const params = new URLSearchParams();
  let _keys = Object.keys(input);

  if (exclude.length) {
    _keys = _keys.filter((it) => !exclude.includes(it));
  }

  _keys.forEach((it) => {
    if (input[it] != null) {
      params.append(it, input[it].toString());
    }
  });

  return params;
};

export type IResponse<T> = {
  data: T;
  status: number;
};
export default axiosInstance;
