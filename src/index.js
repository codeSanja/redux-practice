import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      console.log('Working...');
      return { ...state, fetching: true };
      break;
    }
    case 'FETCH_USERS_RECEIVED': {
      console.log(action.payload[5]);
      console.log(action.payload[6]);
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: [action.payload[5], action.payload[6]],
      };
      break;
    }
    case 'FETCH_USERS_ERROR': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
      break;
    }
    default: {
    }
  }

  return state;
};

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch({
  type: 'FOO',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});
