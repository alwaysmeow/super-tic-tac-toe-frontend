import React, { useState } from 'react';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import Sector from './sector';
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
            {
                value !== Mark.None ?
                    <div className='grid-overlay'>
                    {
                        value === Mark.X ?
                            <RxCross2 className='mark blue'/>
                        : value === Mark.O ?
                            <RxCircle className='mark red'/>
                        :
                            <></>
                    }
                    </div>
                :
                    <></>
            }
        </div>
    );
}

export default Board;