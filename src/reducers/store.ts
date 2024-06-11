import { combineReducers, configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import favorites from './favorites';
import characters, { setSearch, setSortOrder, incrementOffset, decrementOffset, fetchCharacters } from './characters';


const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setSearch,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(fetchCharacters());
  },
});

listenerMiddleware.startListening({
  actionCreator: setSortOrder,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(fetchCharacters());
  },
});
listenerMiddleware.startListening({
  actionCreator: incrementOffset,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(fetchCharacters());
  },
});
listenerMiddleware.startListening({
  actionCreator: decrementOffset,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(fetchCharacters());
  },
});

const reducers = combineReducers({
  favorites: favorites,
  characters: characters
})

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
