import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

// define the UI
// React team borrowed HTML syntax to define the UI -> this is called JSX
// el is a "React element" -> an object with details of the UI
// const el = (
//     <div id="message">
//         Hello <strong>React</strong>
//     </div>
// );

// const appEl = <App></App>;

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement );
// root.render( <App></App> );
root.render( <App /> );