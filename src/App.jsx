import { useState } from 'react'
import './App.css'
import ToDoForm from './components/toDoForm/ToDoForm'
import ToDoList from './components/toDoList/ToDoList'

function App() {
  const [posts,setPosts] = useState([])

  function updatePost(value){
    setPosts([...posts, value])
  }
  function changeStatus(value){
    posts.forEach(el => el.value === value ? el.done = !el.done : false)
    setPosts([...posts])
  }
  function removePost(value){
    const arr = posts.filter(el => el.value !== value)
    setPosts([...arr])
  }

  return (
    <>
      <h1>ToDo React App</h1>
      <ToDoForm setInputValue={updatePost}></ToDoForm>
      {!posts.length ? <div className='empty-list'>To Do List Is Empty</div> :
      <ToDoList 
        posts={posts} 
        changeStatus={changeStatus} 
        removePost={removePost}>
      </ToDoList>
      }
    </>
  )
}

export default App
