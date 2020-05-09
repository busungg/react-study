import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TabsView from './component/atom/TabsView';

function App() {
  return (
    <div className="App">
      <div style={{ width: '500px', height: '600px' }}>
        <TabsView
          tabContainerId="test"
          tabs={[
            {
              eventKey: 'tab1',
              title: 'tab1',
              children: (
                <div>
                  <div>1</div>
                </div>
              )
            },
            {
              eventKey: 'tab2',
              title: 'tab2',
              children: (
                <div>
                  <div>1</div>
                </div>
              )
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
