import React, { useState } from 'react';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import Sector from './sector';

function Board() {
    return (
        <div className='board grid'>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Sector key={index}/>
                )
            }
        </div>
    );
}

export default Board;