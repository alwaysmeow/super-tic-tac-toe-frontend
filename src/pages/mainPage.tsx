import React, { useEffect, useState } from 'react';

import '../styles/menu.scss'
import createLobbyRequest from '../requests/createLobbyRequest';
import { useDispatch } from 'react-redux';
import { clearLobbyState, setLobbyId } from '../store/lobbySlice';
import JoiningMenu from '../components/joiningMenu';
import { JoinStatus } from '../types';

function MainPage() {
    const dispatch = useDispatch();

    const [joining, setJoining] = useState<JoinStatus>(JoinStatus.Not);

    useEffect(() => {
        dispatch(clearLobbyState());
    }, [dispatch])

    const handleCreateLobby = () => {
        setJoining(JoinStatus.Creating)
        createLobbyRequest()
        .then((response) => response.lobbyId)
        .then((lobbyId) => {
            dispatch(setLobbyId(lobbyId));
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