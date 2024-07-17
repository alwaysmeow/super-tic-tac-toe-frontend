import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice'
import lobbyReducer from './lobbySlice';

const store = configureStore({
    reducer: {
        game: gameReducer,
        lobby: lobbyReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch