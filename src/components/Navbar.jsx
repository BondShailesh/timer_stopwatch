import React from "react";
import styles from "./timer.module.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const navigateStopwatch = () => {
    navigate("/");
  };

  const navigateTimer = () => {
    navigate("/timer");
  };
  return (
    <div className={styles.navbar}>
      <button onClick={navigateStopwatch}>STOPWATCH</button>
      <button onClick={navigateTimer}>Timer</button>
    </div>
  );
}

export default Navbar;
