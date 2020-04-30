import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => {
          return (
            <div style={{ display: 'flex' }}>
              {colors.map((color) => (
                <div
                  onClick={() => {
                    actions.setColor(color);
                  }}
                  onContextMenu={(e) => {
                    actions.setSubColor(color);
                    e.preventDefault();
                  }}
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          );
        }}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
