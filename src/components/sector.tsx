import React, { useState } from 'react';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import Cell from './cell';

function Sector() {
    return (
        <div className='sector grid'>
            {
                [...Array(9)].map((item: number, index: number) => 
                    <Cell key={index}/>
                )
            }
        </div>
    );
}

export default Sector;