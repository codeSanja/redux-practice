import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

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
    default: {
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

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.dispatch({ type: 'FOO' });

//user actions
store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Will' } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 35 } });
store.dispatch({ type: 'CHANGE_AGE', payload: { age: 36 } });
store.dispatch({ type: 'CHANGE_NAME', payload: { name: 'Fred' } });
//END OF user actions

//NEXT: https://www.youtube.com/watch?v=DJ8fR0mZM44
