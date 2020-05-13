import React, { CSSProperties } from 'react';

const HScrollAtom: React.FunctionComponent<{ style: CSSProperties }> = ({
  style,
  children,
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <div style={style}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'nowrap',
          alignContent: 'strech',
          overflowX: 'auto',
        }}
      >
        {childArray.map(child => {
          return child;
        })}
      </div>
    </div>
  );
};

export default HScrollAtom;
