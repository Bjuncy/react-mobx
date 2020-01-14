import React, { Component } from 'react';
import Routes from './routes/index';
import './App.css';
import { Provider } from 'mobx-react';
import store from './store/index';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider {...store}>
                    <Routes />
                </Provider>
            </div>
        );
    }
}

export default App;