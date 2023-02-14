import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf';
import { addNews, updateNewPostText } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRender = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} addNews={addNews} updateNewPostText={updateNewPostText}/>
  </React.StrictMode>
);
}

