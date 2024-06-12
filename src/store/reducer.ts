import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "generalReducer",
  initialState: {
    UI: {
      isLoading: {
        status: false,
        message: ""
      },
      onAlert: {
        status: false,
        message: ""
      }
    },
    UserData: {
      id_user: "",
      name: "",
      email: "",
      phone: "",
      token: "",
    },
  },
  reducers: {
    setLoginState: (state: any, action) => {
      state.UserData = {
        ...action.payload,
      };
    },
    updateUserState: (state:any, action) => {
      state.UserData = {
        ...state.UserData,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoginState, updateUserState } = generalSlice.actions;

export default generalSlice.reducer;
