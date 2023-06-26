import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";
import { cinemaFilterReducer } from "./features/cinemaFilter";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cinemaFilter: cinemaFilterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});

export type State = ReturnType<typeof store.getState>;
