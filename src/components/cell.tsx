import React, { useState, useCallback } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { Mark } from '../types';
import { AppDispatch, RootState } from '../store/store';
import { setHighlight, move } from '../store/gameSlice';
import useSelector from '../hooks/useSelector';
import useHighlight from '../hooks/useHighlight';
import makeMoveRequest from '../requests/makeMoveRequest';
import MarkSvg from './svg';

interface CellProps {
    x: number,
    y: number,
    i: number,
    j: number,
}

function Cell({ x, y, i, j }: CellProps) {
    const store = useStore<RootState>();
    const dispatch = useDispatch<AppDispatch>();

    const turn = useSelector(state => state.game.turn & state.lobby.player);
    const open = useSelector(state => turn && state.game.openSectors[x][y] && state.game.sectors[x][y][i][j] === Mark.None);
    const [ mark, setMark ] = useState<Mark>(Mark.None);
    const [ highlight, setHoverHighlight ] = useHighlight(x, y, i, j);

    const handleClick = useCallback(() => {
        if (open)
        {
            const { lobbyId, playerName } = store.getState().lobby;
            if (lobbyId)
                makeMoveRequest(lobbyId, playerName, x, y, i, j)
            setHoverHighlight(false);
            setMark(turn);
            dispatch(move({ x, y, i, j }));
        }
    }, [store, turn, dispatch, setHoverHighlight, x, y, i, j])

    const handleHover = useCallback(() => {
        if (open)
        {
            setHoverHighlight(true);
            setMark(turn);
            dispatch(setHighlight({ i, j }));
        }
    }, [dispatch, turn, setHoverHighlight, i, j])

    const handleMouseOut = useCallback(() => {
        if (open)
        {
            setHoverHighlight(false);
            setMark(Mark.None);
            dispatch(setHighlight(null));
        }
    }, [dispatch, setHoverHighlight])

    return (
        <div className={'cell'
                + (highlight === Mark.X ? ' hl-blue' : highlight === Mark.O ? ' hl-red' : '')
            } 
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
            { mark > Mark.None && <MarkSvg mark={mark}/> }
        </div>
    );
}

export default Cell;