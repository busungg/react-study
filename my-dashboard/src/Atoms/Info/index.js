import React from 'react';
import useInputs from '../../Hooks/UseInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickName: ''
  });

  const { name, nickName } = state;

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
