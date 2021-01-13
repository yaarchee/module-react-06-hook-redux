import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/counter/counterActions';
import styles from './Counter.module.css';
import { getCounter } from '../../redux/counter/counterSelectors';

function Counter() {
  const { value, step } = useSelector(getCounter);
  const dispatch = useDispatch();

  console.log(value, step);

  return (
    <div className={styles.counter}>
      <button type="button" onClick={() => dispatch(actions.inc(step))}>
        increment on {step}
      </button>
      <button type="button" onClick={() => dispatch(actions.dec(step))}>
        decrement on {step}
      </button>
      <p>
        Count <span>{value}</span>
      </p>
    </div>
  );
}

export default Counter;
