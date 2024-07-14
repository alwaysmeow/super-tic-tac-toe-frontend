import React from 'react';

import Board from '../components/board';
import '../styles/game.scss'

function GamePage() {
    return (
        <div className='game-page'>
            <Board/>
        </div>
    );
}

export default GamePage;