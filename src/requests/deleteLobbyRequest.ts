async function deleteLobbyRequest(lobbyId: number) {
    const postdata = {
        lobbyId,
    };

    return await fetch('/api/lobby/deleteLobby', 
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