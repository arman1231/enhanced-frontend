import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const inc = () => {
        setCount(count+1)
    }
    const dec = () => {
        setCount(count-1)
    }
    return (
        <div>
            {<p>{count}</p>}
            <button className={classes.button} onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};
