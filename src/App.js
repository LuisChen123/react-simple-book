import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { GlobalStyled } from './style.js';
import Header from './commom/header/index';
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import './static/inconfont/iconfont.js';
import Login from './pages/login'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="divRoot">
          <GlobalStyled />
          <BrowserRouter>
          <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login/:type' exact component={Login}></Route> 
            <Route path='/detail/:id' exact component={Detail}></Route> 
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
