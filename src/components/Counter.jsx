import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, incrementByValueAction, resetAction } from '../actions';

function Counter(props) {
    const {count} = useSelector((state) => {return state})
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(incrementAction());
    }

    const onDecrement = () => {
        dispatch(decrementAction());
    }

    const onReset = () => {
        dispatch(resetAction());
    }

    const onIncrementByValue = () => {
        dispatch(incrementByValueAction(5));
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onIncrementByValue}>Increment By value</button>
        </div>
    );
}

export default Counter;