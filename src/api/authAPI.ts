import { default as _axios } from "axios";
import { API_ACTION, URL } from "../../utils/general";

const axios: any = _axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: 0,
  },
});

export const onLogin = (payload: any) => {
  //   axios.defaults.baseURL = URL;

  return axios
    .post(API_ACTION.LOGIN, { ...payload })
    .then((res: any) => {
      return res;
    })
    .catch(function (error: any) {
      return console.log(error);
    });
};
