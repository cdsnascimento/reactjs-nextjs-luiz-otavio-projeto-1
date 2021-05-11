
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      post: [
        {
          id: 1,
          title: 'O título 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O título 3',
          body: 'O corpo 3'
        },
      ]
    };

  render() {

    const { post }= this.state;

    return (
      <div className="App">
        {post.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          
        ))}
      </div>
    );
  }
}

export default App;
