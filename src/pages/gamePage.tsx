import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../components/board';
import getGameState from '../requests/getGameState';
import { clearGameState, setGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { Mark } from '../types';
import { useNumberParam } from '../hooks/useParam';

function GamePage() {
    const dispatch = useDispatch();
    // const lobbyId = useSelector(state => state.lobby.lobbyId);
    const lobbyId = useNumberParam('id');

    useEffect(() => {
        if (lobbyId)
            getGameState(lobbyId)
            .then(state => {
                dispatch(setGameState(state));
            });
        else
        {
            dispatch(clearGameState());
            dispatch(setPlayerMark(Mark.X | Mark.O));
        }
    }, [dispatch, lobbyId]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default GamePage;