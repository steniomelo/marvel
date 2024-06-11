import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters as fetchCharactersApi } from '../services/api';
import { Character } from '../types/character';

interface CharactersState {
  characters: Character[];
  charactersTotal: number;
  search: string;
  sortOrder: 'name' | 'modified';
  status: 'idle' | 'loading' | 'failed';
  filteredCharacters: Character[];
  showFavorites: boolean;
}

const initialState: CharactersState = {
  characters: [],
  charactersTotal: 0,
  search: '',
  sortOrder: 'name',
  status: 'idle',
  filteredCharacters: [],
  showFavorites: false,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, { getState }) => {
    const state = getState() as { characters: CharactersState };
    const response = await fetchCharactersApi(0, 20, state.characters.search, state.characters.sortOrder);
    return {
      characters: response.data.data.results,
      total: response.data.data.total,
    };
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'name' | 'modified'>) => {
      state.sortOrder = action.payload;
    },
    toggleShowFavorites: (state) => {
      state.showFavorites = !state.showFavorites;
      if (state.showFavorites) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        state.filteredCharacters = favorites;
      } else {
        state.filteredCharacters = state.characters;
      }
    },
    setFilteredCharacters: (state, action: PayloadAction<Character[]>) => {
      state.filteredCharacters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
        state.showFavorites = false;
      })
      .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction <{characters: Character[], total: number}>) => {
        state.status = 'idle';
        state.characters = action.payload.characters;
        state.filteredCharacters = action.payload.characters;
        state.charactersTotal = action.payload.total;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearch, setSortOrder, toggleShowFavorites, setFilteredCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
