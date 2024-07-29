import './App.css';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';

function App() {
// const[input, setInput] = useState("");
// const prevState = useRef("");
  const inputField = useRef();

  const clickHandler = () => {
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red";
    console.log(inputField.current);
  }
  
  // useEffect(() => {
  //   prevState.current = input;
  // },[input])

  // const fromHandler = (e) => {
  //   setInput(e.target.value);
  // }
  return (
    <>
      <Header />
      <input ref={inputField} />
      <button onClick={clickHandler}>submit</button>
      {/* <input value={input} onChange={fromHandler} />
      <h4> prev state was {prevState.current} </h4> */}
    </>
  );
}

export default App;
