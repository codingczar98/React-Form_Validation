import React, { useState } from 'react'

export const Conditional = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='text-center'>
        <h1 className='text-3xl my-2'> Conditional</h1>
        {
            toggle?<p className='text-2xl text-green-600'>user is logged in</p>:<p className='text-2xl text-red-600'>user is not logged in</p>
        }
        <button onClick={()=>setToggle(!toggle)} className='border rounded-md bg-slate-500 p-3 my-3'>click to toggle</button>

    </div>
  )
}
