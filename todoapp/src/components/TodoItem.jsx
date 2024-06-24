import React, { useState } from 'react'
import { useTodos } from '../context'

function TodoItem({todo}) {
  const {updateTodo, removeTodo} = useTodos()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodomsg] = useState(todo.todo)
  const setActive = ()=>{
    updateTodo({...todo, active: !todo.active})
  }
  const editTodo = ()=>{
    updateTodo({...todo, todo:todoMsg})
    setIsTodoEditable(false)

  }
  return (
    <>
     <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.active ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.active}
        onChange={setActive}
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${todo.active ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodomsg(e.target.value)}
        readOnly={!isTodoEditable}
        />
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if (todo.active) return
            if (isTodoEditable) {
                editTodo()
            }else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.active}
        >{isTodoEditable ? "📁": "✏️"}</button>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => removeTodo(todo.id)}
        >❌</button>
    </div>
    </>
  )
}

export default TodoItem
