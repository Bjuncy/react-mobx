import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index';
import './App.css';
import { Provider } from 'mobx-react';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider {...store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;