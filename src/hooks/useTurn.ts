import useSelector from "./useSelector";

function useTurn()
{
    const turn = useSelector(state => state.game.turn & state.lobby.player)
    return turn;
}

export default useTurn;