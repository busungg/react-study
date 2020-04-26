import React, { Component } from 'react';
//import Counter from './Atoms/Counter';
import Average from './Atoms/Average';
import Info from './Atoms/Info';
import { setCallbacks, getState } from './Hooks/UseInputs';

setCallbacks(function () {
  const state = getState();
  console.log('App callback and state: ', state);
});

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
