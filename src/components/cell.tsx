import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import useSelector from '../hooks/useSelector';
import { AppDispatch, RootState } from '../store/store';
import { switchPlayer } from '../store/gameSlice';

function Cell() {
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValue] = useState<Mark>(Mark.None);
    const move: number = useSelector(state => state.game.currentPlayer);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setValue(move);
        dispatch(switchPlayer());
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