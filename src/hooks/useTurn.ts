import { useStore } from "react-redux";

import { RootState } from "../store/store";
import { Mark } from "../types";

function useTurn()
{
    const store = useStore<RootState>();

    function getTurn(): Mark {
        const state = store.getState().game;
        return state.turn & state.player;
    }

    return getTurn;
}

export default useTurn;