export function grid2D<T> (value: T): T[][] {
    return Array.from({length: 3}, () => 
        Array.from({length: 3}, () => value),
    );
}

export function grid4D<T> (value: T): T[][][][] {
    return Array.from({length: 3}, () => 
        Array.from({length: 3}, () => 
            Array.from({length: 3}, () => 
                Array.from({length: 3}, () => value),
            )
        )
    );
}