import React from 'react';

import GridOverlay from './gridOverlay';
import useSelector from '../hooks/useSelector';
import { RootState } from '../store/store';
import { Mark } from '../types';

interface GridProps {
    className: string,
    children: React.ReactNode;
    valueGetter: (state: RootState) => Mark,
}

function Grid({ className, children, valueGetter }: GridProps) {
    const value = useSelector(valueGetter);

    return (
        <div className={`${className} grid`}>
            { children }
            <GridOverlay mark={value}/>
        </div>
    );
}

export default Grid;