import {
  useSelector
} from 'react-redux';

import Counter from "./components/Counter";
import ThemeToggler from "./components/ThemeToggler";

import './App.css';

function App() {
  const value = useSelector( state => state.theme.value );

  return (
    <div className={`theme-${value}`}>
      <ThemeToggler />
      <Counter />  
    </div>
  );
};

export default App;
