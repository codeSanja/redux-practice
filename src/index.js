import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      state = { ...state, name: action.payload.name };
      break;
    }
    case 'CHANGE_AGE': {
      state = { ...state, age: action.payload.age };
      break;
    }
  }
  return state;
};

const tweetsReducer = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed: ', store.getState());
});

store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Will' } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 35 } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 36 } });
store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Fred' } });

//NEXT: https://www.youtube.com/watch?v=DJ8fR0mZM44
