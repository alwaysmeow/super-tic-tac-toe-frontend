import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice'
import joiningReducer from './joiningSlice';

const store = configureStore({
    reducer: {
        game: gameReducer,
        joining: joiningReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch