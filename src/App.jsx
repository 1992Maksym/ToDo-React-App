import { useState } from 'react'
import './App.css'
import ToDoForm from './components/toDoForm/ToDoForm'
import ToDoList from './components/toDoList/ToDoList'

function App() {
  const [posts,setPosts] = useState([])

  function updatePost(value){
    setPosts([...posts, value])
  }

  return (
    <>
      <h1>ToDo React App</h1>
      <ToDoForm setInputValue={updatePost}></ToDoForm>
      <ToDoList posts={posts}></ToDoList>
    </>
  )
}

export default App
