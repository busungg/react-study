import React, { useCallback, useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import styles from './style.module.css';

export interface Props {
  tabContainerId: string;
  tabs: { eventKey: string; title: string; child: JSX.Element }[];
}

const TabsView = ({ tabContainerId, tabs }: Props) => {
  /**
   * perfect scroll variable
   */
  const psNav = useRef<any>(null);
  const psContent = useRef<any>(null);

  /**
   * perfect scroll bar element
   */
  const naviCol = useRef<any>(null);
  const contentCol = useRef<any>(null);

  const onSelect = useCallback(() => {
    if (psContent) {
      contentCol.current.scrollTop = 0;
      psContent.current.update();
    }
  }, []);

  useEffect(() => {
    if (naviCol.current) {
      psNav.current = new PerfectScrollbar(naviCol.current, {
        wheelSpeed: 0.3,
        wheelPropagation: true,
        minScrollbarLength: 20,
      });
      psNav.current.update();
    }

    if (contentCol.current) {
      psContent.current = new PerfectScrollbar(contentCol.current, {
        wheelSpeed: 0.3,
        wheelPropagation: true,
        minScrollbarLength: 20,
      });
      psContent.current.update();
    }

    return () => {
      if (psNav.current) {
        psNav.current.destroy();
      }

      if (psContent.current) {
        psContent.current.destroy();
      }
    };
  });

  let defaultActiveKey;
  if (tabs[0]) {
    defaultActiveKey = tabs[0].eventKey;
  }

  if (!defaultActiveKey) {
    return null;
  }

  return (
    <Container
      className={styles.tabs__view}
      fluid={true}
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <Tab.Container id={tabContainerId} defaultActiveKey={defaultActiveKey}>
        <Row noGutters={true}>
          <Col
            ref={naviCol}
            xs={3}
            style={{ height: '100%', overflowY: 'auto' }}
          >
            <Nav variant="pills">
              {tabs.map(tab => {
                return (
                  <Nav.Item key={tab.eventKey}>
                    <Nav.Link eventKey={tab.eventKey} onSelect={onSelect}>
                      {tab.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col
            ref={contentCol}
            xs={9}
            style={{ height: '100%', overflowY: 'auto' }}
          >
            <Tab.Content>
              {tabs.map(tab => {
                return (
                  <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
                    {tab.child}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default TabsView;
