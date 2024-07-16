import React from "react";
import { useDispatch } from "react-redux";
import { setLobbyId, setPlayerName } from "../store/joiningSlice";
import { JoinStatus } from '../types';
import useSelector from "../hooks/useSelector";
import joinLobbyRequest from "../requests/joinLobbyRequest";
import { loadState } from "../store/gameSlice";

interface JoiningMenuProps {
    joining: JoinStatus,
}

function JoiningMenu({ joining }: JoiningMenuProps) {
    const dispatch = useDispatch();

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
        if (lobbyId !== '')
        {
            const lobby = Number(lobbyId)
            joinLobbyRequest(lobby, playerName)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                else
                    return null
            })
            .then((data) => {
                if (data)
                {
                    const player = data.playerType;
                    dispatch(loadState({ lobby, player }));
                    document.location.href = '/game';
                }
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