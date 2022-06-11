import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import styles from "./timer.module.css"

function updateTimer(tm){

  var hours = Math.floor(tm / 1000 / 60 / 60);
  var minutes = Math.floor(tm / 60000) % 60;
  var seconds =  ((tm / 100) % 60);
  // saca los decimales ej 2 d{0,2}
  var seconds = seconds.toString().match(/^-?\d+(?:\.\d{0,-1})?/)[0];
  var miliseconds = ("00" + tm).slice(-2);
  var centiseconds;



  centiseconds = miliseconds/10;
  centiseconds = (centiseconds).toString().match(/^-?\d+(?:\.\d{0,-1})?/)[0];

  minutes = (minutes < 10 ? '0' : '') + minutes;
  seconds = (seconds < 10 ? '0' : '') + seconds;
  centiseconds = (centiseconds < 10 ? '0' : '') + centiseconds;
  hours = hours + (hours > 0 ? ':' : '');
  if (hours==0){
    hours= "";
  }

return (hours + minutes + ' : ' + seconds + " : ")
}

function Timer() {
    const [time0, setTime] = useState(0);
    const show = useRef(null);
    const [finaltime , setFinalTime] = useState(0)
    const start =  ()=>{
        if(!show.current){
   let id = setInterval(()=>{
    setTime(prev=>prev+1);
    setFinalTime(prev=>prev+1)

    
     },10);
     show.current =id;
     }
    }

    const pause = ()=>{
    clearInterval(show.current);
    show.current = null;
    }

    const reset = ()=>{
    clearInterval(show.current);
    setFinalTime(0)
    show.current = null;
    setTime(0)
    }

if(finaltime>=100){
    setFinalTime(0)
}


    useEffect(()=>{
        return() => { 
            clearInterval(show.current);
              }
     },[])

  return (
    <div className={styles.app0}>
        <h1>STOPWATCH</h1>
        <div className={styles.timer}>
     <h1> {updateTimer(time0)} <span>{(finaltime)} </span> </h1>
     </div>

      <div>
      <button className={styles.buttons1} onClick={start}>Start</button>
      <button className={styles.buttons2} onClick={pause}>Pause</button>
      <button className={styles.buttons3} onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
