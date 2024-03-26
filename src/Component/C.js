import { useEffect, useRef, useState } from "react";

function C() {
  const [countdown, setCountdown] = useState(60);

  const timeId = useRef(99)
  console.log(timeId.current);

  const prevCount = useRef()
   useEffect(()=>{
    prevCount.current = countdown
   },[countdown])

  const startCountdown = () => {
    // Initialize countdown to ensure it starts from the correct value
    
   
    // Start the countdown interval
    timeId.current= setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);
    console.log("Start ->", timeId.current);
  };

  const stopCountdown = () => {
    clearInterval(timeId.current);
    console.log('Stop', timeId.current);
  };
  console.log(countdown,prevCount.current);
  return (
    <div style={{ padding: 20 }}>
      <h1>{countdown}</h1>
      <button onClick={startCountdown}>Start</button>
      <button onClick={stopCountdown}>Stop</button>
    </div>
  );
}

export default C;
