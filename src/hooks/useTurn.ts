import { useStore } from "react-redux";

import { RootState } from "../store/store";

function useTurn()
{
    const store = useStore<RootState>();

    const getTurn = () => store.getState().game.turn;

    return getTurn;
}

export default useTurn;