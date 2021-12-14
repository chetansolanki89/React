import React, { useEffect, useState } from "react";

const Watch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    // const sec=seconds+1
    setTimeout(
      () => (seconds !== 10 ? setSeconds(seconds + 1) : setSeconds(0)),
      1000
    );
  }, [seconds]);
  useEffect(() => {
    // const sec=seconds+1
    setTimeout(
      () => (minutes !== 10 ? setMinutes(minutes + 1) : setMinutes(0)),
      1000 * 10
    );
  }, [minutes]);
  useEffect(() => {
    // const sec=seconds+1
    setTimeout(
      () => (hours <= 23 ? setHours(hours + 1) : setHours(0)),
      1000 * 60 * 60
    );
  }, [seconds]);
  return (
    <div>
      <p>
        <h1>
          Time: {hours}:{minutes}:{seconds}
        </h1>
      </p>
    </div>
  );
};

export default Watch;
