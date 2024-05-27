import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(action);
      // new action is payload
      console.log(action);
      console.log("action printed ");
      console.log(state);
      console.log("action printed ");
      console.log(action.payload);
      console.log("payload printed ");

      return action.payload;
    },
  },
});

export const itemSliceAction = itemsSlice.actions;
export default itemsSlice;
