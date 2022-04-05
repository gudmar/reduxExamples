
import { createStore, applyMiddleware } from 'redux';
import oldCounterReducer from '../features/oldCounter/oldCounterReducer';
import oldTaskReducer from '../features/oldTasks/oldTasksReducer';
import defaultState from './defaultState';
import shoppingReducer from '../features/shoppingChart_subscribe/shoppingChartReducer';
import { logAToConsole, logBToConsole, logCToConsole, logDToConsole } from '../middleware/testMiddleware';

const rootReducer = (state = {counter: 2, tasks: 'someTask'}, action) => {
    return {
        counter: oldCounterReducer(state.counter, action),
        tasks: oldTaskReducer(state.tasks, action),
        shopping: shoppingReducer(state.shopping, action)
    }
}

const oldStore = createStore(rootReducer, defaultState, applyMiddleware(logAToConsole, logBToConsole, logCToConsole, logDToConsole));
console.log(JSON.stringify(oldStore.getState()));
export {rootReducer, oldStore}



// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#creating-the-root-reducer
