import React from 'react'
import { useState, useEffect, useRef } from 'react';
const Counter = () => {
    const [count, setcount] = useState(0);

    const id = useRef();

    const clearInterval = () => {
        window.clearInterval(id.current);
    }

    useEffect(() => {
        id.current= window.setInterval(()=> {
        setcount(c => c + 1)
        }, 1000)
     return clearInterval;
    });


    return (
        <div className="count">
            <h1>{count}</h1>
            <button onClick={clearInterval}>Stop</button>
        </div>
    )
}

export default Counter
