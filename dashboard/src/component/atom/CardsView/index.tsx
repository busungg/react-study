import React from 'react';

const CardsView: React.FunctionComponent<{}> = ({ children }) => {
  const array = React.Children.toArray(children);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {array.map((child, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'nowrap',
              overflowX: 'auto'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CardsView;
