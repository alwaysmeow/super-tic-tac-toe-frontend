import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Board from '../components/game/board';
import getGameState from '../requests/getGameState';
import { setGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { GameState, Mark } from '../types';
import { RootState } from '../store/store';
import { grid2D } from '../game/createGrid';
import socketUrl from '../ws/socketUrl';
import useLobby from '../hooks/useLobby';

interface LobbyGameParams {
    lobbyId: number
}

function LobbyGamePage({ lobbyId }: LobbyGameParams) {
    const dispatch = useDispatch();
    const playerName = useSelector<RootState, string>(state => state.lobby.playerName);
    
    useLobby(lobbyId, playerName)

    // this useEffect should be deleted later
    useEffect(() => {               
        getGameState(lobbyId)
        .then(state => {
            dispatch(setGameState(state));
        });
    }, [dispatch, lobbyId]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default LobbyGamePage;