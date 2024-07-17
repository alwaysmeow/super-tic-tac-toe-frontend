import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setLobbyId, setPlayerName } from "../store/joiningSlice";
import { JoinStatus } from '../types';
import useSelector from "../hooks/useSelector";
import joinLobbyRequest from "../requests/joinLobbyRequest";
import { setGameState } from "../store/gameSlice";
import getGameState from "../requests/getGameState";

interface JoiningMenuProps {
    joining: JoinStatus,
}

function JoiningMenu({ joining }: JoiningMenuProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lobbyId = useSelector((state) => state.joining.lobbyId ? String(state.joining.lobbyId) : '');
    const playerName = useSelector((state) => state.joining.playerName);

    const handleLobbyIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (joining === JoinStatus.Joining)
        {
            const string = event.target.value.replace(/[^0-9]/g, '');
            dispatch(setLobbyId(Number(string)));
        }
    }

    const handlePlayerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPlayerName(event.target.value));
    }

    const handleJoin = () => {
        if (lobbyId !== '' && playerName !== '')
        {
            const lobby = Number(lobbyId)
            joinLobbyRequest(lobby, playerName)
            .then(response => response.status === 200 ? response.json() : null)
            .then(data => data ? data.playerType : null)
            .then(player => {
                if (player)
                    getGameState(lobby, player)
                    .then(state => {
                        dispatch(setGameState(state));
                        navigate('/game');
                    });
            })
        }
    }

    if (joining === JoinStatus.Not)
        return <></>
    else
        return (
            <div className="menu joining-menu">
                <input value={lobbyId} onChange={handleLobbyIdChange}/>
                <input value={playerName} onChange={handlePlayerNameChange}/>
                <button onClick={handleJoin}>Join</button>
            </div>
        )
}

export default JoiningMenu;