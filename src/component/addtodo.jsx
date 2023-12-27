import React, { useState } from 'react'
import { addTodo } from '../feature/todoSlice'
import { useDispatch } from 'react-redux'

export default function AddTodo() {
    const [input , setinput] = useState("")
    const dispatch = useDispatch()
    const addtodohandle = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput("")
    }
  return (
    <>
    <div className=' bg-slate-500 p-[20px] justify-center items-center'>
    <form onSubmit={addtodohandle} className='justify-center items-center text-center' action="">
        <input type="text" className='p-[10px]' value={input} onChange={(e)=>setinput(e.target.value)}/> 
        <button type='submit' className=' bg-red-700 p-3 ms-2 rounded-2xl'>submit</button>  
    </form>
    </div>

    </>
  )
}
