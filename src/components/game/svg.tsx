import React from "react";
import { Mark } from "../../types";
import { RxCircle, RxCross2 } from "react-icons/rx";

interface MarkSvgProps {
    mark: Mark,
}

function MarkSvg({ mark }: MarkSvgProps)
{
    return (
        mark === Mark.X ?
            <RxCross2 className='mark blue'/>
        : mark === Mark.O ?
            <RxCircle className='mark red'/>
        :
            <></>
    )
}

export default MarkSvg;