import React, { useState } from 'react';
// import { RxCircle, RxCross2 } from 'react-icons/rx';

// import { Mark } from '../types';
import Sector from './sector';
import useSelector from '../hooks/useSelector';

function Board() {
    const highlightedSector = useSelector((state) => state.game.highlightedSector)

    return (
        <div className='board grid'>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Sector key={index} x={Math.floor(index / 3)} y={index % 3} highlighted={index === highlightedSector}/>
                )
            }
        </div>
    );
}

export default Board;