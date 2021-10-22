import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './store/reducer';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

export const store = createStore(appReducer, composedEnhancer);
