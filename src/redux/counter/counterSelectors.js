import { createSelector } from 'reselect';

const getValue = ({ counter }) => counter.value;
const getStep = ({ counter }) => counter.step;

export const getCounter = createSelector(
  [getValue, getStep],
  (value, step) => ({
    value,
    step,
  })
);
