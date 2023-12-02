import { TOGGLE_THEME } from "../actions/constants";

const initialThemeState = {
    value: 'light'
};

const themeReducer = ( state = initialThemeState, action ) => {
    switch( action.type ) {
        case TOGGLE_THEME:
            return {
                ...state,
                value: state.value === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

export default themeReducer;