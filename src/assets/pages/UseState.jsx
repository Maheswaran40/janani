import React, { useState } from 'react'

function UseState() {

    // const[stateVar_name,StateFun_name]=useState("initialization")
  
    let [count,setCount]=useState(0)
    console.log(count);
    
    function increase(){
        setCount(++count)
    }

    // const[name,setName]=useState("")
    // const[age,setAge]=useState()

    var [user,setUser]=useState({
      name:"",age:""
    })
  return (
    <>
    
    <h1>{count}</h1>
    <button onClick={increase}>Increase</button>


      {/* <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
        <input type="submit" />
      </form> */}

         <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <input type="text" placeholder='age' onChange={(e)=>setUser({...user,age:e.target.value})}/>
        <input type="submit" />
      </form>

      <h1>Name : {user.name} age :{user.age}</h1>
    </>
  )
}

export default UseState