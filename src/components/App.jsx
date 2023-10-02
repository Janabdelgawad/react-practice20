import React, { useState } from "react";

function App() {
  //update time each second
  setInterval(updateTime, 1000);
  //get current time
  const now = new Date().toLocaleTimeString();
  //time is what is going to be displayed "actor"
  /*setTime is the dynamic form of the time 
  that pours into time each change "director/writer"*/
  //start change from the const now
  const [time, setTime] = useState(now);
  //get current time and update it
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      {/* display time */}
      <h1>{time}</h1>
      {/* display current time every click */}
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
