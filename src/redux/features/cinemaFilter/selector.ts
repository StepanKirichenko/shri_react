import { State } from "@/redux/store";

export const selectCinemaFilter = (state: State) => state.cinemaFilter;
export const selectCinemaId = (state: State) => state.cinemaFilter.cinemaId;
