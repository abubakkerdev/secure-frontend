import { createSlice } from "@reduxjs/toolkit";

const getCookie = (cookieName) => {
  let cookieValue = document.cookie
    .split(";")
    .map(
      (el) =>
        decodeURIComponent(el.trim()).split("=")[0] == cookieName &&
        JSON.parse(
          decodeURIComponent(el.trim())
            .split("=")[1]
            .split("s:")[1]
            .split("}")[0] + "}"
        )
    );
  return cookieValue.find((el) => el && el);
};

const initialState = {
  userLoginInfo: getCookie("userAllInfo")
    ? getCookie("userAllInfo")
    : { error: false },
  dynamicToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userLoginInfo = action.payload;
    },
    setDynamicToken(state, action) {
      state.dynamicToken = action.payload; // Update the token dynamically
    },
  },
});

export const { setUserData, setDynamicToken } = userSlice.actions;

export default userSlice.reducer;
