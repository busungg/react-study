import React, { Component } from 'react';
import MyComponent, { Temp } from './Atoms/MyComponent';

class App extends Component {
  render() {
    Temp();

    return <MyComponent>리액트</MyComponent>;
  }
}

export default App;
