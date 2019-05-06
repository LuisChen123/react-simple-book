import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyled } from './style.js'
import Header from './commom/header/index'
import './static/inconfont/iconfont.js'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="divRoot">
          <GlobalStyled />
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App;
