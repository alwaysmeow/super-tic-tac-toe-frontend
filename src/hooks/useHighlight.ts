import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { RootState } from "../store/store";
import { Mark } from "../types";
import useTurn from "./useTurn";

function useHighlight(x: number, y: number, i: number, j: number, hover: boolean): Mark
{
    const turn = useTurn();
    const [highlight, setHighlight] = useState<Mark>(Mark.None);

    const value = useSelector((state: RootState) => state.game.sectors[x][y][i][j]);
    const opening = useSelector((state: RootState) => state.game.highlight[x][y] && value === Mark.None);
    const open = useSelector((state: RootState) => state.game.openSectors[x][y] && value === Mark.None);

    useEffect(() => {
        setHighlight(hover ? turn : opening ? 3 - turn : open ? turn : Mark.None);
    }, [hover, opening, open, turn])

    return highlight;
}

export default useHighlight;