import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { GlobalStyled } from './style.js';
import Header from './commom/header/index';
import Home from './pages/home'
import Detail from './pages/detail'
import './static/inconfont/iconfont.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="divRoot">
          <GlobalStyled />
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
