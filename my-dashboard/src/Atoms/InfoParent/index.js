import React, { useState, useCallback } from 'react';
import Info from '../Info';

import { setCallbacks, getState } from '../../Hooks/UseInputs';

const InfoParent = (props) => {
  const callback = useCallback(() => {
    setCallbacks(function () {
      const state = getState();

      console.log(
        `InfoParent ${props.num}'s state = ${state.name} and = ${state.nickName}`
      );
    });
  }, []);

  const [temp, setTemp] = useState(1);
  const [init, setInit] = useState(false);

  if (!init) {
    callback();
    setInit(true);
  }

  return (
    <div
      style={{
        border: '1px solid #000',
        width: '400px'
      }}
    >
      <button
        onClick={function () {
          setTemp(temp + 1);
        }}
      >
        State 변경
      </button>
      <Info num={props.num} />
    </div>
  );
};

export default InfoParent;
