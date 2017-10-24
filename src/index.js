// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React, { Component } from 'react';
import  { createStore } from 'redux';

const reducer = function (state, action) {
    if(action.type === "INC"){
        return state+action.payload.value;
    }if(action.type === "DEC"){
        return state-action.payload.value;
    }

    return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed: ", store.getState())
})

store.dispatch({type: "INC", payload: {value : 1}});
store.dispatch({type: "DEC", payload: {value : 2}});
store.dispatch({type: "INC", payload: {value : 3}});
store.dispatch({type: "DEC", payload: {value : 4}});
