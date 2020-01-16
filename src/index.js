import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import SopraList from './component/SopraList';
// import './style.css';

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <SopraList />
        </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
