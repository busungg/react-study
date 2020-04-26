import React from 'react';
import useInputs, { dispatchCallbacks } from '../../Hooks/UseInputs';

const Info = () => {
  console.log('rerendering');

  const [state, onChange] = useInputs({
    name: '',
    nickName: ''
  });

  const { name, nickName } = state;

  dispatchCallbacks();

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>별명: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
