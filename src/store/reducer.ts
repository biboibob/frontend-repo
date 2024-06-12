import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "generalReducer",
  initialState: {
    UI: {
      isLoading: false,
    },
    UserData: {
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
  },
});

// Action creators are generated for each case reducer function
export const { setLoginState } = generalSlice.actions;

export default generalSlice.reducer;
