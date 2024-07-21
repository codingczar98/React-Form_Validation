import { useState } from "react"

export const Form1 =()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [show,setshow]=useState([])

    const handleusername=(e)=>{
        console.log(e.target.value)
        // console.log(e.target.name)
        setUsername(e.target.value);
    }
    const handleemail=(e)=>{
        setEmail(e.target.value);
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setshow([username,email]);
    }
  return (
    <>
    <div className="bg-gray-50 border rounded-md p-5 w-1/2 text-center " style={{margin:"auto"}}>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" name="username" id="username" className='px-2 border-2' placeholder='username'
            onChange={handleusername} />
            <input type="email" name="email" id="email" className='px-2 border-2' placeholder='email'
            onChange={handleemail} />
        <br /><button type='submit' className='border-1 bg-blue-800 text-white px-4 py-3 mt-3 rounded-md'> submit</button>
        </form>
        <p>{show}</p>

    </div>
    </>
  )
}
