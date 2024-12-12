// import React, { useState, useEffect } from 'react';
// import './Timer.css'
// function Timer() {
//   const [time, setTime] = useState({
//     hours: 5,
//     minutes: 8,
//     seconds: 56,
//   });
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTime((prevTime) => {
//           if (prevTime.seconds === 0) {
//             if (prevTime.minutes === 0) {
//               if (prevTime.hours === 0) {
//                 clearInterval(intervalId);
//                 return prevTime;
//               } else {
//                 return {
//                   ...prevTime,
//                   hours: prevTime.hours - 1,
//                   minutes: 59,
//                   seconds: 59,
//                 };
//               }
//             } else {
//               return {
//                 ...prevTime,
//                 minutes: prevTime.minutes - 1,
//                 seconds: 59,
//               };
//             }
//           } else {
//             return {
//               ...prevTime,
//               seconds: prevTime.seconds - 1,
//             };
//           }
//         });
//       }, 1000);
//     } else {
//       clearInterval(intervalId);
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning, time]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };
//   return (
//     <div className="timer">
//       <div className='timer1'>
//         <div className='time-div'>
//         <span className='time1'>{time.hours.toString().padStart(2, '0')}:</span>
//         <span className='time1'>{time.minutes.toString().padStart(2, '0')}:</span>
//         <span className='time1'>{time.seconds.toString().padStart(2, '0')}</span>
//         </div>
//       </div>
//       <div className="time-head">
//         <div className='time-head-div'>
//         <span className='time-head1'>{`${time.hours.toString().padStart(2, '0')}  :`}</span>
//         <span className='time-head1'>{`${time.minutes.toString().padStart(2, '0')} :`}</span>
//         <span className='time-head1'>{time.seconds.toString().padStart(2, '0')}</span>
//         </div> 
//       </div>
//       <div className="controls">
//         <button onClick={handleStart} className="controls1">Start</button>
//       </div>
//     </div>
//   );
// }

// export default Timer;


import { useState, useEffect } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'



function Timer() {
  const [time, setTime] = useState(10);
  const handleSetTime = (time) => {
    // const hours = time / 3600;
    // const minutes = (time % 3600) / 60;
    // const seconds = time % 60;
    // setTime({
    //   hours: hours,
    //   minutes: minutes,
    //   seconds: seconds,
    // });
  }
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div className="timer">
      <CountdownCircleTimer
        isPlaying={isRunning}
        duration={time}
        colors={['#FF0000', '#00FF00', '#0000FF']}
        onComplete={() => { setTime(10); return { shouldRepeat: true, delay: 1.5 }; }}

        onUpdate={(time) => {
          handleSetTime(time)
        }}
      >
        {({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600)
          const minutes = Math.floor((remainingTime % 3600) / 60)
          const seconds = remainingTime % 60

          return <div style={{
            color: 'white',
          }}> {hours}:{minutes}:{seconds}</div>
        }}
      </CountdownCircleTimer>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={() => setTime(time + 3600)}>+1 hour</button>
      <button onClick={() => setTime(time + 60)}>+1 minute</button>
      <button onClick={() => setTime(time + 1)}>+1 second</button>
      <button onClick={() => setTime((time) => time >= 3600 ? time - 3600 : time)}>-1 hour</button>
      <button onClick={() => setTime((time) => time >= 60 ? time - 60 : time)}>-1 minute</button>
      <button onClick={() => setTime((time) => time >= 1 ? time - 1 : time)}>-1 second</button>


    </div >
  )
}

export default Timer;



