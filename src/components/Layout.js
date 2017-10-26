import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return (
        <button onClick={this.fetchTweets.bind(this)}> {'load tweets'} </button>
      );
    }

    const mappedTweets = tweets.map(tweet => {
      return <li>{tweet.text}</li>;
    });
    return (
      <div>
        {this.props.user.name}
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}

export default connect(store => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})(Layout);
