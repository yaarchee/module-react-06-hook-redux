import { createAction } from '@reduxjs/toolkit';

// const inc = (value) => ({
//   type: INCREMENT,
//   payload: value,
// });

const inc = createAction('counter/increment');

// const dec = (value) => ({
//   type: DECREMENT,
//   payload: value,
// });

const dec = createAction('counter/decrement');

const actions = {
  inc,
  dec,
};

export default actions;
