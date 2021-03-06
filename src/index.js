import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import OrcList from './component/OrcList';

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <OrcList />
        </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
