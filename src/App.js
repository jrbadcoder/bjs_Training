import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getStore } from './redux/store';
import { Provider } from 'react-redux'
import AppRouter from './router';
import 'antd/dist/antd.css';

const store = getStore();

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
