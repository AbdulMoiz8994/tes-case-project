import React,{useState} from 'react'
import {TimerButton} from '../TimerButton/TimerButton'



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


    return (
        <div>
            <h1>Timer Application</h1>
        <span>{second < 10 ? `0${second}` : second}</span>
         <TimerButton
         ButtonAction={Run}
         ButtonValue={"Start"}
         />
         <TimerButton
         ButtonAction={Stop}
         ButtonValue={"Stop"}
         />
        </div>
    )
}
