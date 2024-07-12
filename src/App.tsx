import React from 'react';
import { Provider } from 'react-redux';

import Board from './components/board';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board/>
      </div>
    </Provider>
  );
}

export default App;
