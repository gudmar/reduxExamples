import { configureStore } from '@reduxjs/toolkit';
import { createStore, bindActionCreators } from 'redux';
import counterReducer from '../features/myCounter/MyCounterReducer';
import taskReducer from '../features/task/TasksReducer';
import messageReducer from '../features/message/MessageReducer';
import { logAToConsole, logBToConsole, logCToConsole, logDToConsole } from '../middleware/testMiddleware';


const myThunk = store => next => action => {
  console.log(action)
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action)
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    message: messageReducer,
  },
  preloadedState: {
      counter: 0,
      tasks: [],
      message: null
  },
  middleware: [myThunk]
});

export default store;
