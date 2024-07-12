import React from 'react';
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
    highlighted?: boolean,
}

function Cell({ x, y, i, j, highlighted }: CellProps) {
    const dispatch = useDispatch<AppDispatch>();
    const value = useSelector((state) => state.game.sectors[x][y][i][j]);
    const open = useSelector((state) => state.game.openSectors[x][y])
    const store = useStore<RootState>();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (open && value === Mark.None)
        {
            const turn: number = store.getState().game.turn;
            dispatch(move({x, y, i, j}));
        }
    }

    const handleHover = (event: React.MouseEvent<HTMLDivElement>) => {
        if (open)
            dispatch(highlight({
                x: i,
                y: j,
            }));
    }

    const handleMouseOut = () => {
        dispatch(highlight(null));
    }

    return (
        <div className={'cell' + (highlighted ? ' highlighted' : '') + (open ? ' open' : '')} 
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
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