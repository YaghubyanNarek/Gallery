import { createSlice } from '@reduxjs/toolkit';
import { Photo } from '../../types/types';

interface IinitialState {
  favorites: Photo[];
  originalFavorites: Photo[];
}

const initialState: IinitialState = {
  favorites: [],
  originalFavorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      if (!state.favorites.find((item) => item.id === action.payload.id)) {
        state.favorites.push(action.payload);
        state.originalFavorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          item => item.id !== action.payload.id
        );
        state.originalFavorites = state.originalFavorites.filter(
            item => item.id !== action.payload.id
        )
      }
    },
    filterBy(state, action) {
      if (action.payload.sortBy === 'photographer') {
        state.favorites = state.favorites.sort((first, second) =>
          first.photographer.localeCompare(second.photographer)
        );
      }
      else if (action.payload.sortBy === 'All') {
        state.favorites = [...state.originalFavorites];
      }
    },
  },
});

export const { addToFavorites, filterBy } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
