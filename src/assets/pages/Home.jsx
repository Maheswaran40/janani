import React, { useEffect, useRef, useState } from "react";
import "../style/index.css";
import products_data from "./products/ProductsData";
import { useNavigate } from "react-router-dom";
// import Mycontext from '../Contextprovider/Mycontext'
function Home() {
  const navigate = useNavigate();
  let [count, setCount] = useState(0);
  // const{fun1}=useContext(Mycontext)
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  console.log("fiunction");

  const increaseData = useRef(0);
  function increase() {
    increaseData.current.innerHTML++;
  }

  var startRef = useRef("");
  function START() {
    startRef.current = setInterval(() => {
      console.log("running");
    }, 1000);
  }
  function STOP() {
    clearInterval(startRef.current);
  }
  return (
    <>
      <h1 className="h1-tag">Home </h1>
      {products_data.map((v, i) => (
        <div key={i}>
          <img
            src={v.image}
            alt=""
            onClick={() => navigate(`/Product/${v.id}`)}
          />
          <span>Name : {v.name}</span>
          <span>Price : {v.price}</span>
          <span>Quantity: {count}</span>
          <button onClick={() => setCount(++count)}>+</button>
          <button onClick={() => setCount(--count)}>-</button>
        </div>
      ))}

      <form action="">
        <input type="text" ref={inputRef} />
      </form>

      <h1 ref={increaseData}>0</h1>
      <button onClick={increase}>click</button>

      <button onClick={START}>start</button>
      <button onClick={STOP}>stop</button>
    </>
  );
}

export default Home;
