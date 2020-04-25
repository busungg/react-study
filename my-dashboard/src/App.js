import React, { Component } from 'react';
//import Counter from './Atoms/Counter';
import Average from './Atoms/Average';
import Info from './Atoms/Info';

class App extends Component {
  render() {
    return (
      <>
        <Average />
        <Info></Info>
      </>
    );
  }
}

export default App;
