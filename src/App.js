import React from 'react';
import  { GlobalStyled } from './style.js'
import Header from './commom/header/index'
import './static/inconfont/iconfont.js'
function App() {
  return (
    <div className="divRoot">
    <GlobalStyled/>
      <Header />
    </div>
  );
}

export default App;
