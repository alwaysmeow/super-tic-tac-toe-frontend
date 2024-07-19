import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../components/board';
import useSelector from '../hooks/useSelector';
import getGameState from '../requests/getGameState';
import { clearGameState, setGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { Mark } from '../types';
import { useSearchParams } from 'react-router-dom';

function GamePage() {
    const dispatch = useDispatch();
    const lobbyId = useSelector(state => state.lobby.lobbyId);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')

    useEffect(() => {
        console.log(id);
        if (lobbyId)
            getGameState(lobbyId)
            .then(state => {
                console.log(state);
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