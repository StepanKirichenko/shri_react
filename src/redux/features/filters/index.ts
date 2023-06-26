import { createSlice } from "@reduxjs/toolkit";

type FiltersState = {
  cinemaId?: string;
  genre?: string;
  search?: string;
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
    setSearchFilter: (state, { payload }: SetFilterAction) => {
      state.search = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
