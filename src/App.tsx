import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './store/store';
import GamePage from './pages/gamePage';
import MainPage from './pages/mainPage';

function App() {
    
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;