import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf';
import { addNews } from './redux/state.js';


export let reRender = (state) => {const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addNews={addNews}/>
  </React.StrictMode>
);
}