import { useEffect, useState } from "react";
import StartAndReset from "./startandreset";

export default function CounterApplication(){
    const [counter, setCounter] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [timerId, settimerId] = useState(null);
    function start(){
        if(timerId){
            clearInterval(timerId);
        }
        const tid = setInterval(() => {
            setCounter(c => c+1);
        }, 1000);
        settimerId(tid);
        setRunning(true);
    }
    function reset(){
        if(timerId){
            clearInterval(timerId);
        }
        setCounter(0);
        setRunning(false);
    }
    function stoper(){
        setRunning(false);
        if(timerId){
            clearInterval(timerId);
        }
    }
    return (
        <div>
            <h1>Time : {counter}</h1>
            {isRunning ? (
                <button onClick={stoper}>stop</button>
            ) : (
                <>
                    <button onClick={start}>Start</button>
                    <button onClick={reset}>Reset</button>
                </>
            )}
        </div>
    );
}