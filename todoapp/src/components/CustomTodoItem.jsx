import React, { useState } from 'react'
import { useTodos } from '../context'

function CustomTodoItem({todo}) {
  console.log(todo);
    const [todoText, setTodoText] = useState(todo.text)
    const {updateTodo, removeTodo} = useTodos()
    const [isEditable, setEditable] = useState(false)
    const setActive = ()=>{
        updateTodo({...todo, active:!todo.active})
    }
  return (
    <div className={`todo-item ${todo.active ? 'item-active' : 'item-inactive'}`}>
        <input className='active-box'
        type="checkbox"
        checked={todo.active}
        onChange={setActive} />

        <input className='text-box'
        value={todoText}
        readOnly={!isEditable}
        onChange={(e)=> setTodoText(e.target.value)}/>

        <button className='btn'
        disabled={todo.active}
        onClick={()=>{
          if (todo.active) return
          if(isEditable){
            updateTodo({...todo, text:todoText})
          }
          setEditable((prev)=> !prev)
        }}
        >
          {( isEditable) ? '📁' : '✏️'}
          </button>
        <button className='btn' 
        onClick={()=>removeTodo(todo.id)}
        >❌</button>

    </div>
  )
}

export default CustomTodoItem
