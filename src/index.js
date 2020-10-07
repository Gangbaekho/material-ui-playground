import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <CssBaseline/>
            <App />
        </Router>
    </React.StrictMode>
    , 
    document.getElementById("root"));

serviceWorker.unregister();
