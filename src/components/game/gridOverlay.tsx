import React from "react";

import { Mark } from "../../types";
import MarkSvg from "./svg";

interface GridOverlayProps {
    mark: Mark;
}

function GridOverlay({ mark }: GridOverlayProps) {
    if (mark === Mark.None)
        return <></>
    else
        return (
            <div className='grid-overlay'>
                <MarkSvg mark={mark}/>
            </div>
        )
}

export default GridOverlay;