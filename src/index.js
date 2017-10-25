import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      console.log('Working...');
      break;
    }
    case 'FETCH_USERS_RECEIVED': {
        console.log(action.payload[5]);
        console.log(action.payload[6]);
      break;
    }
    case 'FETCH_USERS_ERROR': {
        console.log(action.payload);
      break;
    }
  }

  return state;
};

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: 'FETCH_USERS_START' });

  axios
    .get('http://rest.learncode.academy/api/wstern/users')
    .then(response => {
      dispatch({ type: 'FETCH_USERS_RECEIVED', payload: response.data });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
    });
});
