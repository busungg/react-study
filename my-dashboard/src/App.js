import React, { Component } from 'react';
import InfoParent from './Atoms/InfoParent';

class App extends Component {
  constructor(props) {
    super(props);
    this.numbers = [1, 2, 3, 4, 5, 6];
  }

  render() {
    console.log('App render');
    return (
      <>
        {this.numbers.map((num, idx) => {
          return <InfoParent num={num} key={idx} />;
        })}
      </>
    );
  }
}

export default App;
