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
                    index === highlightedSector ?
                        <Sector key={index} highlighted/>
                    :
                        <Sector key={index}/>
                )
            }
        </div>
    );
}

export default Board;