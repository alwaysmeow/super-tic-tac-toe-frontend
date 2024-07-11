import React, { useState } from 'react';
import { RxCircle, RxCross2 } from 'react-icons/rx';

enum Inner {
    None = 0,
    Сross = 1,
    Nought = 2,
}

function Cell() {
    const [inner, setInner] = useState<Inner>(Inner.None);

    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        setInner(Inner.Сross);
    }

    return (
        <div className='cell' onClick={handleClick}>
            {
                inner === Inner.Сross ?
                    <RxCross2 className='inner blue'/>
                : inner === Inner.Nought ?
                    <RxCircle className='inner red'/>
                :
                    <></>
            }
        </div>
    );
}

export default Cell;