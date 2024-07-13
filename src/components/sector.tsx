import React from 'react';

import Cell from './cell';
import GridOverlay from './gridOverlay';
import useSelector from '../hooks/useSelector';

interface SectorProps {
    x: number,
    y: number,
}

function Sector({ x, y } : SectorProps) {
    const value = useSelector((state) => state.game.board[x][y]);

    return (
        <div className={'sector grid'}>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Cell key={index} 
                        x={x} y={y} i={Math.floor(index / 3)} j={index % 3}
                    />
                )
            }
            <GridOverlay mark={value}/>
        </div>
    );
}

export default Sector;