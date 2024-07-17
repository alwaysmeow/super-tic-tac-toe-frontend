import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../components/board';
import useSelector from '../hooks/useSelector';
import getGameState from '../requests/getGameState';
import { clearGameState, setGameState } from '../store/gameSlice';

function GamePage() {
    const dispatch = useDispatch();
    const lobbyId = useSelector(state => state.joining.lobbyId);
    const playerName = useSelector(state => state.joining.playerName);

    useEffect(() => {
        if (lobbyId)
            getGameState(lobbyId, playerName)
            .then(state => {
                dispatch(setGameState(state));
            });
        else
            dispatch(clearGameState());
    }, [dispatch, lobbyId, playerName]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default GamePage;