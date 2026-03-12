import React, { Children } from 'react'
import Mycontext from './Mycontext'

function Contextdata({Children}) {
    var a=10
    function fun1(){
        alert("function is working 1")
    }
    const data={fun1,a}
  return (
    <Mycontext.Provider value={data}>
        {Children}
    </Mycontext.Provider>
  )
}

export default Contextdata