import {
    useDispatch
} from 'react-redux';

import {
    toggleTheme
} from '../actions/creators';

const ThemeToggler = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch( toggleTheme() )}>Toggle theme</button>
    );
};
 
export default ThemeToggler;