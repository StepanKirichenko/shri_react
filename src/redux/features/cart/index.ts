import { createSlice } from "@reduxjs/toolkit";

type CartState = Record<string, number>;

type ChangeTicketAmoutAction = {
  payload: string;
};

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state, { payload }: ChangeTicketAmoutAction) => {
      const count = state[payload] || 0;
      state[payload] = count + 1;
    },

    decrement: (state, { payload }: ChangeTicketAmoutAction) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },

    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
