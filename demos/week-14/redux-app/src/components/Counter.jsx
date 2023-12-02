import {
    useRef
} from 'react';

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    decrement,
    increment
} from '../actions/creators';

const Counter = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const value = useSelector( state => state.counter.value ); // this component subscribes to store state updates

    return (
        <div>
            <button onClick={() => dispatch( decrement( +inputRef.current.value ) )}>-</button>
            <input type="number" defaultValue="1" ref={inputRef} />
            <span id="counter">{value}</span>
            <button onClick={() => dispatch( increment( +inputRef.current.value ) )}>+</button>
        </div>
    );
}
 
export default Counter;