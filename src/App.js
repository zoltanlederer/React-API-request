import React from 'react';
import axios from 'axios';

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/${this.props.subreddit}.json`
        )
      .then(res => {
        const posts = res.results.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default Reddit;

/*
fetch(`http://www.reddit.com/r/reactjs.json`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  })
  .then(json => {
    const posts = res.data.data.children.map(
      obj => obj.data
    );
    console.log(posts);
  })
  .catch(error => {
    console.error(error);
  });
*/