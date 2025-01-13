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

  return (
    <>
      <h1>ToDo React App</h1>
      <ToDoForm setInputValue={updatePost}></ToDoForm>
      <ToDoList posts={posts} changeStatus={changeStatus}></ToDoList>
    </>
  )
}

export default App
