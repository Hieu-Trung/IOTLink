import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }

    const subtractCount = () => {
        setCount(count - 1)
    }
    const countRef = useRef();
    countRef.current = count;
    let time = useRef()

    const addAsync = () => {
        time.current = setTimeout(() => {
            setCount((count) => count + 1)
        }, 3000)
    }
    // useEffect(() => {
    //   console.log(count, ' Async')
    // }, [count])
    const cancel = () => {
        console.log(count);
        console.log(time.current);
        clearTimeout(time.current)
    }
    return (
        <div>
            <p>Counter: {count}</p>
            <div>
                <button onClick={addCount}>+ Add</button>
                <button onClick={subtractCount}>- Subtract</button>
                <button onClick={addAsync}>+ async</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    );
}



export default Count