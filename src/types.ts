export enum Mark {
    None = 0,
    X = 1,
    O = 2,
    Draw = 3,
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