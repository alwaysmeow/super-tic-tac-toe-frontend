import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../components/game/board';
import { clearGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { Mark } from '../types';

function LocalGamePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearGameState());
        dispatch(setPlayerMark(Mark.X | Mark.O));
    }, [dispatch]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default LocalGamePage;