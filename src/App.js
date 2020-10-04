import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var Time = new Date().toLocaleTimeString();
  const [Ctime, UpdatedTime] = useState(Time);

  const RefreshTime = () => {
    Time = new Date().toLocaleTimeString();
    UpdatedTime(Time);
  };

  return (
    <>
      <h1>{Ctime}</h1>
      <button onClick={RefreshTime}>Click To Change Time</button>
    </>
  );
}
