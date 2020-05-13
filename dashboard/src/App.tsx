import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TabsView from './component/atom/TabsView';
import HScrollAtom from './component/atom/HScrollAtom';
import ThumbnailCard from './component/atom/ThumbnailCard';

function App() {
  const array = [
    {
      thumbnail:
        'https://s.pstatic.net/static/www/mobile/edit/2020/0510/cropImg_728x360_31016872707389082.jpeg',
      title: '소원 리다',
      text: 'GFRIEND SUV'
    },
    {
      thumbnail:
        'https://s.pstatic.net/static/www/mobile/edit/2020/0510/cropImg_728x360_31016872707389082.jpeg',
      title: '소원 리다1',
      text: 'GFRIEND SUV1'
    },
    {
      thumbnail:
        'https://s.pstatic.net/static/www/mobile/edit/2020/0510/cropImg_728x360_31016872707389082.jpeg',
      title: '소원 리다2',
      text: 'GFRIEND SUV2'
    },
    {
      thumbnail:
        'https://s.pstatic.net/static/www/mobile/edit/2020/0510/cropImg_728x360_31016872707389082.jpeg',
      title: '소원 리다3',
      text: 'GFRIEND SUV3'
    },
    {
      thumbnail:
        'https://s.pstatic.net/static/www/mobile/edit/2020/0510/cropImg_728x360_31016872707389082.jpeg',
      title: '소원 리다4',
      text: 'GFRIEND SUV4'
    }
  ];

  return (
    <div className="App">
      <div style={{ width: '500px', height: '600px' }}>
        <TabsView
          tabContainerId="test"
          tabs={[
            {
              eventKey: 'tab1',
              title: 'tab1',
              child: (
                <div>
                  <div>1</div>
                </div>
              )
            },
            {
              eventKey: 'tab2',
              title: 'tab2',
              child: (
                <div>
                  <div>1</div>
                </div>
              )
            }
          ]}
        />
        <div style={{ width: '800px', height: '600px' }}>
          <HScrollAtom>
              {array.map((item, idx) => {
                return (
                  <Thumbnail
                    thumbnail={item.thumbnail}
                    title={item.title}
                    text={item.text}
                    key={idx}
                  />
                );
              })}
            </>
            <>
              {array.map((item, idx) => {
                return (
                  <Thumbnail
                    thumbnail={item.thumbnail}
                    title={item.title}
                    text={item.text}
                    key={idx}
                  />
                );
              })}
            </>
            <>
              {array.map((item, idx) => {
                return (
                  <Thumbnail
                    thumbnail={item.thumbnail}
                    title={item.title}
                    text={item.text}
                    key={idx}
                  />
                );
              })}
          </HScrollAtom>
        </div>
      </div>
    </div>
  );
}

export default App;
