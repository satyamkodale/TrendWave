import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      //just need to push so directly pushed
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      //here we filter returns new array that why we directly changed array
      return state.filter((itemId) => action.payload != itemId);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
