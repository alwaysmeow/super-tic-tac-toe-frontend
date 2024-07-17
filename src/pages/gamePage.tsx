import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../components/board';
import useSelector from '../hooks/useSelector';
import getGameState from '../requests/getGameState';
import { clearGameState, setGameState } from '../store/gameSlice';

function GamePage() {
    const dispatch = useDispatch();
    const lobbyId = useSelector(state => state.joining.lobbyId)

    useEffect(() => {
        const player = 1;
        
        if (lobbyId)
            getGameState(lobbyId, player)
            .then(state => {
                dispatch(setGameState(state));
            });
        else
            dispatch(clearGameState());
    }, [dispatch, lobbyId]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default GamePage;