import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import { AppDispatch, RootState } from '../store/store';
import { switchTurn } from '../store/gameSlice';

function Cell() {
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValue] = useState<Mark>(Mark.None);
    const store = useStore<RootState>();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (value === Mark.None)
        {
            const turn: number = store.getState().game.turn
            setValue(turn);
            dispatch(switchTurn());
        }
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