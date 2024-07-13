import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import { AppDispatch, RootState } from '../store/store';
import { highlight, move } from '../store/gameSlice';
import useSelector from '../hooks/useSelector';

interface CellProps {
    x: number,
    y: number,
    i: number,
    j: number,
}

function Cell({ x, y, i, j }: CellProps) {
    const dispatch = useDispatch<AppDispatch>();
    const store = useStore<RootState>();

    const value = useSelector((state) => state.game.sectors[x][y][i][j]);
    const open = useSelector((state) => state.game.openSectors[x][y] && value === Mark.None);
    const [hoverHighlight, setHoverHighlight] = useState<Mark>(Mark.None);
    const openingHighlight = useSelector((state) => 
        value === Mark.None && state.game.highlight[x][y]
            ? 3 - store.getState().game.turn
            : Mark.None
    );

    const handleClick = () => {
        if (open)
            dispatch(move({ x, y, i, j }));
    }

    const handleHover = () => {
        if (open)
        {
            const turn: Mark = store.getState().game.turn
            setHoverHighlight(turn);
            dispatch(highlight({ i, j }));
        }
    }

    const handleMouseOut = () => {
        dispatch(highlight(null));
        setHoverHighlight(Mark.None);
    }

    const highlighted = () => hoverHighlight > 0 ? hoverHighlight : openingHighlight

    return (
        <div className={'cell'
                + (open ? ' open' : '') 
                + (highlighted() === Mark.X ? ' hl-blue' : highlighted() === Mark.O ? ' hl-red' : '')
            } 
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
            {
                value === Mark.X || hoverHighlight === Mark.X ?
                    <RxCross2 className='mark blue'/>
                : value === Mark.O || hoverHighlight === Mark.O ?
                    <RxCircle className='mark red'/>
                :
                    <></>
            }
        </div>
    );
}

export default Cell;