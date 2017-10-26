import axios from 'axios';

export function fetchTweets() {
  return function(dispatch) {
    axios
      .get('http://rest.learncode.academy/api/test123/tweets')
      .then(response => {
        dispatch(fetchTweetsFulfilled(response));
      })
      .catch(err => {
        dispatch(fetchTweetsRejected(err));
      });
  };
}


function fetchTweetsFulfilled(response){
  return {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: response.data,
  }
}

function fetchTweetsRejected(err){
    return {
        type: 'FETCH_TWEETS_REJECTED',
        payload: err,
    }
}