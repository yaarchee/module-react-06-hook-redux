import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './counterActions';

// const valueReducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       console.log(action.type);
//       return state + action.payload;
//
//     case DECREMENT:
//       return state - action.payload;
//
//     default:
//       return state;
//   }
// };

const stepReducer = (state = 5, _) => state;

const valueReducer = createReducer(0, {
  [actions.inc]: (state, action) => state + action.payload,
  [actions.dec]: (state, action) => state - action.payload,
});

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
