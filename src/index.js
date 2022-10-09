import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { store } from './store/store';
import { Provider } from 'react-redux/es/exports';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <Router>
        <App />
       </Router>
    </Provider>
  </React.StrictMode>
);

