import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counterReducer';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phoneBook: phoneBookReducer,
  },
  // eslint-disable-next-line no-process-env
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
