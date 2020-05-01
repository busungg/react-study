import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <Counter
      number={number}
      onIncrease={() => {
        dispatch(increase());
      }}
      onDecrease={() => {
        dispatch(decrease());
      }}
    />
  );
};

export default CounterContainer;

/*
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number
});


const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  }
});

export default connect(mapStateToProps, {
  increase,
  decrease
})(CounterContainer);
*/
