import { State } from "@/redux/store";

export const selectCartModule = (state: State) => state.cart;

export const selectTicketAmount = (state: State, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectTicketTotalAmount = (state: State) => {
  const cart = selectCartModule(state);
  const movieIds = Object.getOwnPropertyNames(cart);
  let count = 0;
  for (const movieId of movieIds) {
    count += cart[movieId];
  }
  return count;
};
