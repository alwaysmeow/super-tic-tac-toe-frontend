export enum Mark {
    None = 0,
    X = 1,
    O = 2,
    Draw = 3,
}

export enum JoinStatus {
    Not = 0,
    Joining = 1,
    Creating = 2,
    Joined = 3,
}

export interface SectorCoordinates {
    x: number,
    y: number,
}

export interface LocalCellCoordinates{
    i: number,
    j: number,
}

export interface GlobalCellCoordinates extends SectorCoordinates, LocalCellCoordinates {}

export interface GameState {
    player: Mark,
    winner: Mark;
    board: Mark[][],
    sectors: Mark[][][][],
    turn: Mark,
    openSectors: boolean[][],
    highlight: boolean[][],
}