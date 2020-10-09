import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers/RootReducer";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from './ApiMiddleware'

const middleWares = [
    thunkMiddleware,
    apiMiddleware
];

// @ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
// @ts-ignore
            ...middleWares
        ),
    )
);

export default store;