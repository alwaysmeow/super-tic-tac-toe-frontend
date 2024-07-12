export enum Mark {
    None = 0,
    X = 1,
    O = 2,
    Draw = 3,
}

export interface Coordinates4D {
    x: number,
    y: number,
    i: number,
    j: number
}

export interface Coordinates2D {
    x: number,
    y: number,
}