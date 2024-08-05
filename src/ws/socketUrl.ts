function socketUrl(lobbyId: number, playerName: string): string {
    const queryParams = new URLSearchParams({ 
        lobbyId: lobbyId.toString(),
        playerName: playerName,
    }).toString();

    return `ws://127.0.0.1:8080/ws?${queryParams}`;
}

export default socketUrl;