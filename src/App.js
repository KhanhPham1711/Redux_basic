import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addJob,
  decreaseCounter,
  increaseCounter,
  resetTimer,
  set_job,
  startTimer,
  stopTimer,
  tick,
  toogleSwitch,
} from "./action/actions";
import { useRef } from "react";
import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(props) {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(set_job(e.target.value));
  };

  const inputRef = useRef();
  const job = useSelector((state) => state.todos.job);
  const jobs = useSelector((state) => state.todos.jobs); // Lấy mảng jobs từ store Redux
  console.log(job);
  console.log(jobs);

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(set_job(""));
    inputRef.current.focus();
  };

  const count = useSelector((state) => state.counter.count);

  console.log(count);
  const tang = () => {
    dispatch(increaseCounter());
  };

  const giam = () => {
    dispatch(decreaseCounter());
  };

  const switchOn = useSelector((state) => state.toogle.toogle);
  const handleToggle = () => {
    dispatch(toogleSwitch());
  };

  const isRunning = useSelector((state) => state.countdown.isRunning);

  const seconds = useSelector((state) => state.countdown.seconds);
  console.log(isRunning);
  console.log(seconds);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, dispatch]);

  const handleStart = () => {
    dispatch(startTimer());
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  return (
    // <div>
    //   <div style={{ padding: 20 }}>
    //     <h1>Timer: {seconds} seconds</h1>
    //     <button onClick={handleStart}>Start</button>
    //     <button onClick={handleStop}>Stop</button>
    //     <button onClick={handleReset}>Reset</button>

    //     <h2
    //       style={{
    //         backgroundColor: switchOn ? "green" : "red",
    //         color: "white",
    //         padding: "10px",
    //         borderRadius: "5px",
    //         border: "none",
    //         cursor: "pointer",
    //       }}
    //     >
    //       Switch is {switchOn ? "on" : "off"}
    //     </h2>
    //     <button onClick={handleToggle}>Toggle</button>
    //     <h1> {count}</h1>
    //     <button onClick={tang}> tang </button>
    //     <button onClick={giam}> giam</button>
    //     <br />
    //     <br />

    //     <input
    //       ref={inputRef}
    //       placeholder="Enter todo"
    //       value={job}
    //       onChange={handleInput}
    //     />
    //     <button onClick={handleSubmit}>Add</button>
    //     <ul>
    //       {jobs.map((job, index) => (
    //         <li key={index}>{job}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  );
}

export default App;
