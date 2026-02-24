import React from 'react'
import "../style/index.css"
import Header from './Header'
function Home() {

// var a=10
// var b=20

// var style1={color:"blue",backgroundColor:"yellow"}
// var style2={color:"red",backgroundColor:"yellow"}
// function fun1(data){
//   console.log("b : ",data);
  
// }

var a=30
var b=[1,2,3,4,5]
const d=b.map((v,i)=>v*2)

  return (
    <>
    <h1 className='h1-tag'>Home</h1>
    <Header data={a} data2={d}/>
    {/* <h1 style={style2}>value of a is {a}</h1> */}
    {/* <h1 style={style1}>value of b is {b}</h1> */}
    {/* <button onClick={()=>fun1(a)}>click</button> */}

    {/* <h1 style={{color:"blue",backgroundcolor:"yellow",borderRadius:"100px"}}>color</h1> */}
   
   
   
    </>
  )
}

export default Home