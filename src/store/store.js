import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './table/table';

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
