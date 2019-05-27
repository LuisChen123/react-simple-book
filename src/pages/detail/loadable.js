import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading(){
      return <div>page is loading now,please wait</div>
  }
});

export default () =>{
    return <LoadableComponent/>;
}



// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }