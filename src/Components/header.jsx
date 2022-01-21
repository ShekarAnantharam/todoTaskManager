import "./styles.css";
import React, { useState, useEffect } from "react";

function Header() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  //     const [time,setTime]=useState
  //   var today = new Date(),
  //     date =
  //       today.getFullYear() +
  //       "-" +
  //       (today.getMonth() + 1) +
  //       "-" +
  //       today.getDate();
  //   let time = new Date().toLocaleString();
  //   setInterval(() => {
  //     setState({
  //       curTime : new Date().toLocaleString()
  //     })
  //   }, 1000)
  return (
    <div className="header">
      <strong>To Do Task Manager</strong>
      {/* <p>Date:{date}</p> */}
      <p> Date : {date.toLocaleDateString()}</p>
      <p> Time : {date.toLocaleTimeString()}</p>
    </div>
  );
}

export default Header;
