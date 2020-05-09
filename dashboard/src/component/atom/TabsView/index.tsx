import React, { CSSProperties } from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import style from './style.module.css';

export interface Props {
  tabContainerId: string;
  tabs: { eventKey: string; title: string; children: JSX.Element }[];
}

const TabsView = ({ tabContainerId, tabs }: Props) => {
  let defaultActiveKey;
  if (tabs[0]) {
    defaultActiveKey = tabs[0].eventKey;
  }

  if (!defaultActiveKey) {
    return null;
  }

  return (
    <div className={style.tabs__view}>
      <Tabs
        id={tabContainerId}
        defaultActiveKey={defaultActiveKey}
        variant="tabs"
        unmountOnExit={true}
      >
        {tabs.map((tab) => {
          return (
            <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
              {tab.children}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default React.memo(TabsView);
