import React, { useState } from 'react';

import '../styles/menu.scss'
import createLobbyRequest from '../requests/createLobbyRequest';
import { useDispatch } from 'react-redux';
import { setLobbyCode } from '../store/joiningSlice';
import JoiningMenu from '../components/joiningMenu';
import { JoinStatus } from '../types';

function MainPage() {
    const dispatch = useDispatch();

    const [joining, setJoining] = useState<JoinStatus>(JoinStatus.Not);

    const handleCreateLobby = () => {
        setJoining(JoinStatus.Creating)
        createLobbyRequest()
        .then((response) => {
            console.log(response);
            return response.lobbyCode;
        })
        .then((lobbyCode) => {
            dispatch(setLobbyCode(lobbyCode));
        })
    }

    const handleJoinLobby = () => {
        setJoining(JoinStatus.Joining)
    }

    return (
        <div className='page main-page'>
            <div className='menu main-menu'>
                <button onClick={() => { document.location.href = "/game" }}>Local game</button>
                <button onClick={handleCreateLobby}>Create lobby</button>
                <button onClick={handleJoinLobby}>Join lobby</button>
            </div>
            <JoiningMenu joining={joining}/>
        </div>
    );
}

export default MainPage;