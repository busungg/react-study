import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import style from './style.module.css';

const TabView = () => {
  const tablist = [];
  for (let i = 0; i < 100; i++) {
    tablist.push(`tab ${i}`);
  }

  return (
    <div className={style.tabs}>
      <Tabs
        defaultActiveKey="profile"
        id=""
        unmountOnExit={true}
        variant="pills"
      >
        {tablist.map((tab) => {
          return (
            <Tab eventKey={tab} title={tab} key={tab}>
              {tab}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabView;
