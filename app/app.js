import './app.scss'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import Game from './game/game';
import playerReducer from './player/playerReducer';
import pitchReducer from './pitch/pitchReducer';

var reducers = {
    player: playerReducer,
    pitch: pitchReducer
};

var rootReducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

var configureStore = function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};

render(
    <Provider store={configureStore()}>
        <Game/>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}