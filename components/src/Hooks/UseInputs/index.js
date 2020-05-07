import { useReducer } from 'react';

let _state = null;

export const getState = () => {
  return _state;
};

let _callbacks = [];
export const setCallbacks = (callback) => {
  _callbacks.push(callback);
};

export const dispatchCallbacks = (key) => {
  _callbacks.forEach((callback, idx) => {
    if (key - 1 === idx) {
      callback();
    }
  });
};

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  _state = state;

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
