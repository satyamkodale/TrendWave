import { createSelector, createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    currentlyFetching: false,
    fetchDone: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingEnded: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
