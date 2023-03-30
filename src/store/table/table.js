import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sellOrBuy: 'Buy',
  token: 'USDT',
  payment: 'All',
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setStateAction(state, action) {
      state.sellOrBuy = action.payload;
      return state;
    },

    setStateToken(state, action) {
      state.token = action.payload;
      return state;
    },
  },
});

export const { setStateAction, setStateToken } = tableSlice.actions;
export default tableSlice.reducer;
