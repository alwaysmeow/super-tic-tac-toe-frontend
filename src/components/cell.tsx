import React from 'react';
import { useDispatch } from 'react-redux';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import { AppDispatch } from '../store/store';
import { highlight, move } from '../store/gameSlice';
import useSelector from '../hooks/useSelector';
import useHighlight from '../hooks/useHighlight';
import useTurn from '../hooks/useTurn';

interface CellProps {
    x: number,
    y: number,
    i: number,
    j: number,
}

function Cell({ x, y, i, j }: CellProps) {
    const dispatch = useDispatch<AppDispatch>();
    const turn = useTurn();
    const [highlighted, [hover, setHover] ] = useHighlight(x, y, i, j);

    const value = useSelector((state) => state.game.sectors[x][y][i][j]);
    const open = useSelector((state) => state.game.openSectors[x][y] && value === Mark.None);

    const handleClick = () => {
        if (open)
        {
            setHover(false);
            dispatch(move({ x, y, i, j }));
        }
    }

    const handleHover = () => {
        if (open)
        {
            setHover(true);
            dispatch(highlight({ i, j }));
        }
    }

    const handleMouseOut = () => {
        dispatch(highlight(null));
        setHover(false);
    }

    return (
        <div className={'cell'
                + (highlighted() === Mark.X ? ' hl-blue' : highlighted() === Mark.O ? ' hl-red' : '')
            } 
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
            {
                (open && hover && turn() === Mark.X) || value === Mark.X ?
                    <RxCross2 className='mark blue'/>
                : (open && hover && turn() === Mark.O) || value === Mark.O ?
                    <RxCircle className='mark red'/>
                :
                    <></>
            }
        </div>
    );
}

export default Cell;