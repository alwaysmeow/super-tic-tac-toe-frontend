import React, { useState, useCallback } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from '../types';
import { AppDispatch, RootState } from '../store/store';
import { setHighlight, move } from '../store/gameSlice';
import useSelector from '../hooks/useSelector';
import useHighlight from '../hooks/useHighlight';
import useTurn from '../hooks/useTurn';
import makeMoveRequest from '../requests/makeMoveRequest';

interface CellProps {
    x: number,
    y: number,
    i: number,
    j: number,
}

function Cell({ x, y, i, j }: CellProps) {
    const store = useStore<RootState>();
    const dispatch = useDispatch<AppDispatch>();

    const value = useSelector(state => state.game.sectors[x][y][i][j]);
    const open = useSelector(state => state.game.openSectors[x][y] && value === Mark.None);
    const [hover, setHover] = useState<boolean>(false);
    const turn = useTurn();
    const highlight = useHighlight(x, y, i, j, hover);

    const handleClick = useCallback(() => {
        if (open && turn > Mark.None)
        {
            const shouldSendRequest = store.getState().game.player !== Mark.Draw
            if (shouldSendRequest)
            {
                const { lobbyId, playerName } = store.getState().joining;
                if (lobbyId)
                    makeMoveRequest(lobbyId, playerName, x, y, i, j)
            }
            setHover(false);
            dispatch(move({ x, y, i, j }));
        }
    }, [store, open, turn, dispatch, x, y, i, j])

    const handleHover = useCallback(() => {
        if (open && turn > Mark.None)
        {
            setHover(true);
            dispatch(setHighlight({ i, j }));
        }
    }, [open, turn, dispatch, i, j])

    const handleMouseOut = useCallback(() => {
        dispatch(setHighlight(null));
        setHover(false);
    }, [dispatch])

    return (
        <div className={'cell'
                + (highlight === Mark.X ? ' hl-blue' : highlight === Mark.O ? ' hl-red' : '')
            } 
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
            {
                (open && hover && turn === Mark.X) || value === Mark.X ?
                    <RxCross2 className='mark blue'/>
                : (open && hover && turn === Mark.O) || value === Mark.O ?
                    <RxCircle className='mark red'/>
                :
                    <></>
            }
        </div>
    );
}

export default Cell;