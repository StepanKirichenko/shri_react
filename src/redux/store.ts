import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";
import { filtersReducer } from "./features/filters";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});

export type State = ReturnType<typeof store.getState>;
