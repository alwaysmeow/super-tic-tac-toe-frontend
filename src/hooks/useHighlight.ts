import { useSelector } from "react-redux";
import { useState } from "react";

import { RootState } from "../store/store";
import { Mark } from "../types";
import useTurn from "./useTurn";

function useHighlight(x: number, y: number, i: number, j: number): [() => Mark, [boolean, React.Dispatch<React.SetStateAction<boolean>>]]
{
    const turn = useTurn();

    const [hover, setHover] = useState<boolean>(false);
    const value = useSelector((state: RootState) => state.game.sectors[x][y][i][j]);
    const opening = useSelector((state: RootState) => state.game.highlight[x][y] && value === Mark.None);
    const open = useSelector((state: RootState) => state.game.openSectors[x][y] && value === Mark.None);

    const highlighted = () => 
        hover ? 
            turn()
        : 
            opening ?
                3 - turn()
            :
                open ? 
                    turn()
                :
                    Mark.None

    return [ highlighted, [ hover, setHover ] ];
}

export default useHighlight;