import React, { useState } from 'react';
// import { RxCircle, RxCross2 } from 'react-icons/rx';

// import { Mark } from '../types';
import Cell from './cell';

interface SectorProps {
    x: number,
    y: number,
    highlighted?: boolean,
}

function Sector({ x, y, highlighted } : SectorProps) {
    return (
        <div className='sector grid'>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Cell key={index} 
                        x={x} y={y} i={Math.floor(index / 3)} j={index % 3} 
                        highlighted={highlighted}
                    />
                )
            }
        </div>
    );
}

export default Sector;