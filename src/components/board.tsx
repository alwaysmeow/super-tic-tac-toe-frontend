import React from 'react';

import Sector from './sector';
import GridOverlay from './gridOverlay';
import useSelector from '../hooks/useSelector';

function Board() {
    const value = useSelector((state) => state.game.winner);

    return (
        <div className='board grid'>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Sector key={index} x={Math.floor(index / 3)} y={index % 3}/>
                )
            }
            <GridOverlay mark={value}/>
        </div>
    );
}

export default Board;