import React, { useState, useEffect } from 'react'
import './Custom.css'
import CustomTodoItem from './components/CustomTodoItem.jsx'
import CustomTodoForm from './components/CustomTodoForm.jsx'
import { TodoProvider, useTodos} from './context/index.js'
function CustomTodo() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo)=>{

    setTodos((prev) => [{id : Date.now(), ...todo}, ...prev])
}

  const updateTodo = (todo)=> {
    setTodos((pTodos) => pTodos.map((pt) => (pt.id === todo.id ? todo : pt )))
  }

  const removeTodo = (id)=>{
    setTodos((prev) => prev.filter((todo)=> (todo.id !== id)))
  }
  
  useEffect(()=>{
    const prevTodos = JSON.parse(localStorage.getItem("todos"))
    if(prevTodos && prevTodos.length > 0){
      setTodos(prevTodos)
    }
  }, [])

  useEffect(()=>{
    if(todos){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])
 
  return (
    <>
      <h1 className='header'>Todo List</h1>
      <TodoProvider value={{todos, addTodo, updateTodo, removeTodo }}>
      <CustomTodoForm />
      {todos.map((todo)=> (<CustomTodoItem key={todo.id} todo={todo}/>))}
     
      </TodoProvider>
    </>
  )
}

export default CustomTodo
