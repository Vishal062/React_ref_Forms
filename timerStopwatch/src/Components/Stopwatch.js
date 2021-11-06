import { useEffect, useState } from "react";
import "../styles.css";
const Stopwatch = () => {
  // First take all the Variables that is required and create
  //Their state
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [mSecond, setMsecond] = useState(0);
  const [stop, setStop] = useState(true);
  const onStop = () => {
    setStop(true);
  };
  const onStart = () => {
    setStop(false);
  };
  const onRest = () => {
    setHour(0);
    setMin(0);
    setSecond(0);
    setMsecond(0);
  };
  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }

        if (second > 59) {
          setMin(min + 1);
          setSecond(0);
          clearInterval(interval);
        }

        if (mSecond > 999) {
          setSecond(second + 1);
          setMsecond(0);
          clearInterval(interval);
        }

        if (mSecond <= 999) {
          setMsecond(mSecond + 1);
        }
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {hour} : {min}: {second} :{mSecond}
      </h1>
      <button id="btn1" onClick={onStart}>
        Start
      </button>
      <button id="btn2" onClick={onStop}>
        Stop
      </button>
      <button id="btn3" onClick={onRest}>
        Reset
      </button>
    </div>
  );
};

export { Stopwatch };
