import { createSlice } from "@reduxjs/toolkit";

type CinemaFilterState = {
  cinemaId?: string;
};

type SetCinemaFilterAction = {
  payload: string | undefined;
};

const initialState: CinemaFilterState = {};

export const cinemaFilterSlice = createSlice({
  name: "cinemaFilter",
  initialState: initialState,
  reducers: {
    setFilter: (state, { payload }: SetCinemaFilterAction) => {
      state.cinemaId = payload;
    },
  },
});

export const cinemaFilterReducer = cinemaFilterSlice.reducer;
export const cinemaFilterActions = cinemaFilterSlice.actions;
