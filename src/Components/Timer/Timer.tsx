import React,{useState} from 'react'
import {TimerButton} from '../TimerButton/TimerButton'
import './Timer.css'


export const Timer = () => {


let [second, setSecond]=useState<number>(0)
let [minute, setMinute]=useState<number>(0)
let [hour, setHour]=useState<number>(0)
let [status, setStatus]=useState<number>(0)
let [intervals ,setIntervals]=useState<any>()

    // start button
const Run=() =>{
    if(status !== 1){
      setStatus(1)
      setIntervals(
        setInterval(() =>{
         Start()
        },1000)
      )
    }
function Start(){
   if(second === 60){
       minute++
       second=0
   }
   if(minute === 60){
       hour++
       minute=0
   }
   setSecond(++second)

}
}
    // Stop button
const Stop=() =>{
    if(status !== 0){
       setStatus(2)
       clearInterval(intervals)
    }
} 

    //Reset button
const Reset=() =>{
    setSecond(0)
    setMinute(0)
    setHour(0)
    setStatus(0)
    clearInterval(intervals)
}



    return (
        <div className="timer-container">
            <h1>Timer Application</h1>
            <div className="time-display">
        <span>{hour < 10 ? `0${hour}`: hour}:</span>
        <span>{minute < 10 ? `0${minute}` : minute}:</span>
        <span>{second < 10 ? `0${second}` : second}</span>
        </div>
        <div className="timer-button-container">
        {/* Start button */}
         <TimerButton
         ButtonAction={Run}
         ButtonValue={"Start"}
         />
         {/* Stop Button */}
         <TimerButton
         ButtonAction={Stop}
         ButtonValue={"Stop"}
         />
        {/* Rest Button */}
          <TimerButton
            ButtonAction={Reset}
            ButtonValue={"Reset"}
          />
</div>

        </div>
    )
}
