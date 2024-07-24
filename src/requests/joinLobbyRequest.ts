async function joinLobbyRequest(lobbyCode: number, playerName: string) {
    const postdata = {
        lobbyCode,
        playerName,
    };
    
    return await fetch('/api/Lobby/joinLobby', 
        {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postdata)
        })
}

export default joinLobbyRequest;