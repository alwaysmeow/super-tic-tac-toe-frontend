async function deleteLobbyRequest(lobbyCode: number) {
    const postdata = {
        lobbyCode,
    };

    return await fetch('/api/Lobby/deleteLobby', 
        {
            method: "DELETE",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postdata)
        })
        .then(response => response.status)
}

export default deleteLobbyRequest;