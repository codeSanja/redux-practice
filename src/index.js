import React, { Component } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';

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
    case 'ERR_THROW': {
      throw new Error("Aaaa!");
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

const logger = store => next => action => {
  console.log('action fired', action);
  next(action);
};

const error = store => next => action => {
  try{
      next(action);
  }catch (e){
    console.log("AHHHHH!!", e)
  }
};

const middleware = applyMiddleware(logger, error);
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('store changed: ', store.getState());
});

store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Will' } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 35 } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 36 } });
store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Fred' } });
store.dispatch({ type: 'ERR_THROW', payload: { name: 'FredE' } });

//NEXT: https://www.youtube.com/watch?v=DJ8fR0mZM44
