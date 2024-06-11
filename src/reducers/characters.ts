import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters as fetchCharactersApi } from '../services/api';
import { Character } from '../types/character';
import toast from 'react-hot-toast';

interface CharactersState {
  characters: Character[];
  charactersTotal: number;
  search: string;
  sortOrder: 'name' | 'modified';
  status: 'idle' | 'loading' | 'failed';
  filteredCharacters: Character[];
  showFavorites: boolean;
  offset: number;
  limit: number;
}

const initialState: CharactersState = {
  characters: [],
  charactersTotal: 0,
  search: '',
  sortOrder: 'name',
  status: 'idle',
  filteredCharacters: [],
  showFavorites: false,
  offset: 0,
  limit: 20,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, { getState }) => {
    const state = getState() as { characters: CharactersState };

    return toast.promise(fetchCharactersApi(state.characters.offset, state.characters.limit, state.characters.search, state.characters.sortOrder), {
      loading: 'Estamos buscando os heróis para essa missão', 
      success: 'Sua lista de heróis está pronta', 
      error: 'Houve um erro ao tentar carregar seus super heróis',
    }).then(response => ({
      characters: response.data.data.results,
      total: response.data.data.total,
    }));

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
    },
    incrementOffset: (state) => {
      state.offset += state.limit;
      console.log(state.offset);
      },
      decrementOffset: (state) => {
        if (state.offset >= state.limit) {
          state.offset -= state.limit;
        console.log(state.offset);
          }
    },
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

export const { setSearch, setSortOrder, toggleShowFavorites, setFilteredCharacters, incrementOffset,
  decrementOffset } = charactersSlice.actions;
export default charactersSlice.reducer;
