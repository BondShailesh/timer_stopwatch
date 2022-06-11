import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import styles from "./timer.module.css"


function Timer() {
    const [timersec, settimersec] = useState(0)
    const [timermin, settimermin] = useState(0)
    const show = useRef(null);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
 
    const start = () =>{
        if(timersec!=0){
            setSeconds(Number(timersec)) 

        }
        
        if(timermin!=0) {
            setMinutes(+(timermin))
         
        }
        
    }
    console.log(timermin);
useEffect(()=>{
        if(!show.current){

    var id = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(id)
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
    }, 1000)
    return ()=> {
        clearInterval(id);
          }
        }
    // }

},[seconds, minutes, timersec])





    const reset = ()=>{
        setMinutes(0);
        setSeconds(0);
        clearInterval(show.current)
        show.current=null;
        }

  return (
    <div className={styles.app0}>
        <h1>TIMER</h1>
        <input type="number" placeholder='Set Seconds' 
        onChange={(e)=>settimersec(e.target.value)}/>

        <input type="number" placeholder='Set Minutes' 
        onChange={(e)=>settimermin(e.target.value)}/>

            <h1 className={styles.timer}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 

        <div>
      <button className={styles.buttons1} onClick={start}>Start</button>
      <button className={styles.buttons3} onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
