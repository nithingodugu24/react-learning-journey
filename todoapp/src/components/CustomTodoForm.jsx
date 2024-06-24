import React, { useState } from 'react'
import { useTodos } from '../context'

function CustomTodoForm() {
    const [text, setText] = useState("")
    const {addTodo} = useTodos()
    const formSubmit = (e)=>{
        e.preventDefault()
        if(text){
            addTodo({text, active:true})
            setText("")
        }
    }
  return (
    <form className='todo-form'
    onSubmit={formSubmit}>
      <input className='form-text' 
      placeholder='Write Todo here...'
      value={text}
      required={true}
      onChange={(e)=> setText(e.target.value)}>
      </input>

      <button className='btn-submit'
      type='submit'>
        Add
      </button>
    </form>
  )
}

export default CustomTodoForm
