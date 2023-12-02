import {
    DECREMENT,
    INCREMENT,
    TOGGLE_THEME
} from './constants';

// action creators
const decrement = ( delta ) => {
    return {
        type: DECREMENT,
        payload: {
            delta // delta: delta
        }
    };
};

const increment = ( delta ) => {
    return {
        type: INCREMENT,
        payload: {
            delta
        }
    };
};

const toggleTheme = () => {
    return {
        type: TOGGLE_THEME
    };
};

export {
    decrement,
    increment,
    toggleTheme
};