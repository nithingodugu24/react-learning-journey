import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    removeTodo: () => { }
})

export const TodoProvider = TodoContext.Provider

export const useTodos = () => {
    return useContext(TodoContext)
}