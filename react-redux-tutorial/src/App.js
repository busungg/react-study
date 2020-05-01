import React from 'react';
import CounterContainers from './containers/CounterContainers';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div className="App">
      <CounterContainers />
      <CounterContainers />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;
