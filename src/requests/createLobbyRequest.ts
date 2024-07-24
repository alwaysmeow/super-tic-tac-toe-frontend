async function createLobbyRequest() {
    return await fetch('/api/lobby/createLobby', 
        {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
}

export default createLobbyRequest;