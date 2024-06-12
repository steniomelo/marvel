import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/character';
import toast from 'react-hot-toast';
interface FavoritesState {
  favorites: Character[];
  favoritesLimit: number;
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  favoritesLimit: 5
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Character>) => {
      const existingFavorite = state.favorites.find(fav => fav.id === action.payload.id);
      if (existingFavorite) {
          state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
          toast.success(`"${action.payload.name}" foi removido dos seus favoritos`);
        
        } else if (state.favorites.length < state.favoritesLimit) {
          state.favorites.push(action.payload);
          toast(`"${action.payload.name}" foi adicionado a sua lista de heróis favoritos`, { icon: "❤️" });
      } else if(state.favorites.length === state.favoritesLimit) {
        toast.error(`Você atingiu o limite de ${state.favoritesLimit} heróis favoritos`);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
