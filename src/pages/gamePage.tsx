import { useNumberParam } from '../hooks/useParam';
import LobbyGamePage from './lobbyGamePage';
import LocalGamePage from './localGamePage';

function GamePage() {
    const lobbyId = useNumberParam('id');
    
    if (lobbyId)
        return <LobbyGamePage lobbyId={lobbyId}/>
    else
        return <LocalGamePage/>
}

export default GamePage;