import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {} from '../features/todo/Todo'
import { addTodo } from '../features/todo/Todo'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

  return (
    <div>
        AddTodos
    </div>
  )
}

export default AddTodo
