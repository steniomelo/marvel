import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/character';

interface FavoritesState {
  favorites: Character[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      if (state.favorites.length < 5 && !state.favorites.some(fav => fav.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    toggleFavorite: (state, action: PayloadAction<Character>) => {
      const existingFavorite = state.favorites.find(fav => fav.id === action.payload.id);
      if (existingFavorite) {
        state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
      } else if (state.favorites.length < 5) {
        state.favorites.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
