import './index.css';
import './fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf';
import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
);
}

reRender(store.getState());

store.subscribe(reRender);