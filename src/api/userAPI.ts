import { default as _axios } from "axios";
import { API_ACTION, URL } from "../../utils/general";

//Redux
import { useSelector } from "react-redux";
import { store } from "@/store/store";

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

export const onUpdateUser = (payload: any) => {
  //   axios.defaults.baseURL = URL;

  axios.defaults.headers.common["Authorization"] = `Bearer ${
    store.getState()?.generalReducer?.UserData?.token
  }`;

  return axios
    .put(API_ACTION.UPDATE_USER, { ...payload })
    .then((res: any) => {
      return res;
    })
    .catch(function (error: any) {
      return console.log(error);
    });
};
