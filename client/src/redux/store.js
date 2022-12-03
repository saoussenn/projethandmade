import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
