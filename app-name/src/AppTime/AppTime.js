import '../App/App.css';
import React, {useState, useEffect} from "react";

const Timer = (props) =>{

    const [[hr, min, sec,ms], setTime] = useState([props.hours, props.minutes, props.seconds, 1000]);

    const timerTick = () => {
        if (hr <= 0 && min <= 0 && sec == 0){
            setTime([0,0,0,0]);
        }
        else if (min == 0 && sec == 0) {
            setTime([hr - 1, 59, 59,1000]);
        }
        else if (sec == 0) {
            setTime([hr, min - 1, 59, 1000]);
        }
        else if (ms == 0) {
          setTime([hr, min, sec-1, 1000]);
      }
        else {
            setTime([hr, min, sec, ms-2]);
        }      
    };  

    useEffect (() =>{
        const timer = setInterval(() => timerTick(), 1);
        return () => {
            clearInterval(timer);
        }
    });

    return(
      <div className="container"> 
        <h4>Timer - {props.name} :</h4>
        <div className='div__time'>{`${hr.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${min.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${sec.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${ms.toString().padStart(3,'0')}`}</div>
      </div>
    );
};

export default Timer;
