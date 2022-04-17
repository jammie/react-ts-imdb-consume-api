import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import imdbReducer from '../features/imdb/imdbSlice';

const rootReducer = combineReducers({
    top250movies: imdbReducer
})
export const store = configureStore({
    reducer: rootReducer
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;