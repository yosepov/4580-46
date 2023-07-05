/// <reference types="redux-persist" />

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice'
import { persistReducer } from 'redux-persist';
import gameReducer from '../features/Game/gameSlice'

const persistConfig = {
    key: "root",
    storage
}

const reducers = combineReducers({
    user: userReducer,
    game: gameReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

