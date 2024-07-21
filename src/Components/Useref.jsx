import React,{useRef} from 'react'

const Useref = () => {
    const ptag=useRef(null)
    console.log(ptag)
    console.log(" ref compo")
    const change=()=>{
        ptag.current.style.color="blue";
        ptag.current.innerHTML= "Hello World"
    }
  return (
    <>
    <p ref={ptag}>UseRef:</p>
    <button className='border rounded-md text-white px-3 py-2'
    onClick={change}>click</button>
    </>
  )
}

export default Useref