import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer';
import themeReducer from './reducers/themeReducer';

/**
 * state = {
 *      counter: {
 *          value: 0
 *      },
 *      theme: {
 *          value: 'light'
 *      }
 * }
 */
const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware() ) );

export default store;