import React from 'react';

import '../styles/menu.scss'

function MainPage() {
    return (
        <div className='main-page'>
            <div className='main-menu'>
                <button onClick={() => { document.location.href = "/game" }}>Local game</button>
                <button>Create lobby</button>
                <button>Join lobby</button>
            </div>
        </div>
    );
}

export default MainPage;