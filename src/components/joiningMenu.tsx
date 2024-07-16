import React from "react";
import { useDispatch } from "react-redux";
import { setLobbyCode, setPlayerName } from "../store/joiningSlice";
import { JoinStatus } from '../types';
import useSelector from "../hooks/useSelector";
import joinLobbyRequest from "../requests/joinLobbyRequest";
import { loadState } from "../store/gameSlice";

interface JoiningMenuProps {
    joining: JoinStatus,
}

function JoiningMenu({ joining }: JoiningMenuProps) {
    const dispatch = useDispatch();

    const lobbyCode = useSelector((state) => state.joining.lobbyCode ? String(state.joining.lobbyCode) : '');
    const playerName = useSelector((state) => state.joining.playerName);

    const handleLobbyCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (joining === JoinStatus.Joining)
        {
            const string = event.target.value.replace(/[^0-9]/g, '');
            dispatch(setLobbyCode(Number(string)));
        }
    }

    const handlePlayerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPlayerName(event.target.value));
    }

    const handleJoin = () => {
        if (lobbyCode !== '')
        {
            const lobby = Number(lobbyCode)
            joinLobbyRequest(lobby, playerName)
            .then((status) => {
                if (status === 200)
                {
                    dispatch(loadState(lobby));
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
                <input value={lobbyCode} onChange={handleLobbyCodeChange}/>
                <input value={playerName} onChange={handlePlayerNameChange}/>
                <button onClick={handleJoin}>Join</button>
            </div>
        )
}

export default JoiningMenu;