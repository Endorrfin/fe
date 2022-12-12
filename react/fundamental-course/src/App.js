import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const [value, setValue] = useState('text in input');
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
    {id: 4, title: 'Javascript 4', body: 'Description'},
    {id: 5, title: 'Javascript 5', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'Description'},
    {id: 2, title: 'Python 2', body: 'Description'},
    {id: 3, title: 'Python 3', body: 'Description'},
    {id: 4, title: 'Python 4', body: 'Description'},
    {id: 5, title: 'Python 5', body: 'Description'},
  ])

  return (
      <div className="App">

        <hr/>
        <h3>Input</h3>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}/>

        <hr/>
        <h3>Function (hook) counter</h3>
        <Counter/>

        <hr/>
        <h3>Class counter</h3>
        <ClassCounter/>

        <hr/>
        <PostList posts={posts} title="List of posts about Javascript"/>
        <PostList posts={posts2} title="List of posts about Python"/>

      </div>
  );
}

export default App;



