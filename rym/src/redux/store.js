import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //conecta la extension del navegador con reduxdevtloos

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//poder hacer repeticiones a un server
);

export default store;