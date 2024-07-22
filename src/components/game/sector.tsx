import React from 'react';

import Cell from './cell';
import Grid from './grid';

interface SectorProps {
    x: number,
    y: number,
}

function Sector({ x, y } : SectorProps) {

    return (
        <Grid 
            className='sector'
            valueGetter={(state) => state.game.board[x][y]}
        >
            {
                [...Array(9)].map((_, index: number) => 
                    <Cell key={index} 
                        x={x} y={y} i={Math.floor(index / 3)} j={index % 3}
                    />
                )
            }
        </Grid>
    )
}

export default Sector;