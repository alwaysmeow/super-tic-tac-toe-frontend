async function joinLobbyRequest(lobbyCode: number, playerName: string) {
    const postdata = {
        lobbyCode,
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
        .then(response => response.json())
}

export default joinLobbyRequest;