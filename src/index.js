import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {HashRouter} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#c3c3c3'
        }
    },
});

function getRootElement() {
    return (
        <HashRouter>
            <MuiThemeProvider theme={theme}><App/></MuiThemeProvider>
        </HashRouter>
    );
}

ReactDOM.render(getRootElement(), document.getElementById('root'));
serviceWorker.unregister();