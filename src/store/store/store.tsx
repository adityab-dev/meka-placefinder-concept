import { configureStore } from "@reduxjs/toolkit";

import locationsSliceReducer from "../slices/locations-slice";

const store = configureStore({
  reducer: {
    locations: locationsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
