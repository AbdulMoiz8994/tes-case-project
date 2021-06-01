import React,{useState} from 'react'




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

        },1000)
      )
    }
}
    // Stop button


    //Reset button


    return (
        <div>
            <h1>Timer Application</h1>
        </div>
    )
}
