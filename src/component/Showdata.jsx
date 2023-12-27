import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todoSlice'

const Showdata = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div >
      {
        todos.map((t)=>(
            <li key={t.id}>{t.text}------<button onClick={()=>dispatch(removeTodo(t.id))} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
            </li>
            
        ))
      }
      </div>
    </>
  )
}

export default Showdata
