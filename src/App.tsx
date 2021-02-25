import React from 'react';
import { Provider } from 'react-redux';
import './app.css';
import Home from './pages/Home';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
