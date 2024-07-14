import React from 'react';

import Sector from './sector';
import Grid from './grid';
import '../styles/board.scss';

function Board() {
    return (
        <Grid 
            className='board'
            valueGetter={(state) => state.game.winner}
        >
            {
                [...Array(9)].map((_, index: number) => 
                    <Sector key={index} x={Math.floor(index / 3)} y={index % 3}/>
                )
            }
        </Grid>
    )
}

export default Board;