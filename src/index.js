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
    case 'FETCH_USERS_PENDING': {
      return { ...state, fetching: true };
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: [action.payload.data[5], action.payload.data[6]],
      };
      break;
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
        errorPayload: action.payload,
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
  type: 'FETCH_USERS',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users'),
});


// NEXT: https://www.youtube.com/watch?v=nrg7zhgJd4w