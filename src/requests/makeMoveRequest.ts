async function makeMoveRequest(lobbyCode: number, playerName: string, x: number, y: number, i: number, j: number) {
    const postdata = {
        lobbyCode, 
        playerName, 
        SectorRow: x, 
        SectorCol: y, 
        CellRow: i, 
        CellCol: j,
    };
    
    return await fetch('/api/Lobby/makeMove', 
        {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postdata)
        })
}

export default makeMoveRequest;