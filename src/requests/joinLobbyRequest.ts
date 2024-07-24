async function joinLobbyRequest(lobbyId: number, playerName: string) {
    const postdata = {
        lobbyId,
        playerName,
    };
    
    return await fetch('/api/lobby/joinLobby', 
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