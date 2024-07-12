import React, { useState } from 'react';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';

function Cell() {
    const [value, setValue] = useState<Mark>(Mark.None);

    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        setValue(Mark.X);
    }

    return (
        <div className='cell' onClick={handleClick}>
            {
                value === Mark.X ?
                    <RxCross2 className='mark blue'/>
                : value === Mark.O ?
                    <RxCircle className='mark red'/>
                :
                    <></>
            }
        </div>
    );
}

export default Cell;