import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./routes/App";


ReactDOM.render(
    <div>
        <ToastContainer/>
        <App/>
    </div>,
    document.getElementById('root'));
serviceWorker.unregister();