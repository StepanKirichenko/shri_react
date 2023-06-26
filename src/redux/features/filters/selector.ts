import { State } from "@/redux/store";

export const selectFilters = (state: State) => state.filters;
export const selectCinemaId = (state: State) => state.filters.cinemaId;
export const selectGenre = (state: State) => state.filters.genre;
export const selectTitle = (state: State) => state.filters.title;
