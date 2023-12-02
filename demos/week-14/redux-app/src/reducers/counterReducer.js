import {
    DECREMENT,
    INCREMENT,
} from '../actions/constants';

const initialCounterState = {
    value: 0
};

const counterReducer = ( state = initialCounterState, action ) => {
    let newState;

    switch( action.type ) {
        case DECREMENT:
            newState = {
                ...state,
                value: state.value - action.payload.delta
            };
            break;
        case INCREMENT:
            newState = {
                ...state,
                value: state.value + action.payload.delta
            };
            break;
        default:
            newState = state;
    }

    return newState;
};

export default counterReducer;