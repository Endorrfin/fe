import React, {useState} from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import BaseButton from './components/UI/button/BaseButton'
import BaseInput from './components/UI/input/BaseInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
    {id: 4, title: 'Javascript 4', body: 'Description'},
    {id: 5, title: 'Javascript 5', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log('newPost', newPost);
    setPosts([...posts, newPost])
    setTitle('');
    setBody('')
  }

  return (
    <div className="App">
      <hr/>
      <form>
        <BaseInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='name of post'
        />

        <BaseInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder='description of post'
        />
        <BaseButton onClick={addNewPost}>Create post</BaseButton>
      </form>
      <PostList posts={posts} title="List of posts about Javascript"/>
    </div>
  );
}

export default App;



