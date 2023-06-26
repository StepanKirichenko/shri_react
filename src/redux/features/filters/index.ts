import { createSlice } from "@reduxjs/toolkit";

type FiltersState = {
  cinemaId?: string;
  genre?: string;
  title?: string;
};

type SetFilterAction = {
  payload: string | undefined;
};

const initialState: FiltersState = {};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setCinemaFilter: (state, { payload }: SetFilterAction) => {
      state.cinemaId = payload;
    },
    setGenreFilter: (state, { payload }: SetFilterAction) => {
      state.genre = payload;
    },
    setTitleFilter: (state, { payload }: SetFilterAction) => {
      state.title = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
