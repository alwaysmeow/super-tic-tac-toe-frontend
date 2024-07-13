import React from "react";
import { RxCircle, RxCross2 } from 'react-icons/rx';

import { Mark } from "../types";

interface GridOverlayProps {
    mark: Mark;
}

function GridOverlay({ mark }: GridOverlayProps) {
    if (mark === Mark.None)
        return <></>
    else
        return (
            <div className='grid-overlay'>
                {
                    mark === Mark.X ?
                        <RxCross2 className='mark blue'/>
                    : mark === Mark.O ?
                        <RxCircle className='mark red'/>
                    :
                        <></>
                }
            </div>
        )
}

export default GridOverlay;