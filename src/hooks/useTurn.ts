import useSelector from "./useSelector";

function useTurn()
{
    const turn = useSelector(state => state.game.turn & state.game.player)
    return turn;
}

export default useTurn;