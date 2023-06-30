import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    latitude: 0,
    longitude: 0
  }
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      console.log(action);
      state.userData.latitude = action.payload.latitude;
      state.userData.longitude = action.payload.longitude;
    }
  }
});

export const { getUserData } = rootSlice.actions;

export default rootSlice.reducer;