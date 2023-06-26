import { State } from "@/redux/store";

export const selectCartModule = (state: State) => state.cart;

export const selectTicketAmount = (state: State, id: string) =>
  selectCartModule(state)[id] || 0;
