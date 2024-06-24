import { useState, useEffect } from 'react'
import { TodoProvider, useTodos } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './index.css'


function App() {
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
    if(todos && todos.length > 0){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=> (
                            <div key={todo.id}
                            className='w-full'>
                              <TodoItem todo={todo}/>
                              </div>
                          ))
                        }
                        {/* {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))} */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
