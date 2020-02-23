import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Router} from "react-router-dom";
import history from './history';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#B0B0B0'
        }
    },
});

function getRootElement() {
    return (
        <Router history={history}>
            <MuiThemeProvider theme={theme}><App/></MuiThemeProvider>
        </Router>
    );
}

ReactDOM.render(getRootElement(), document.getElementById('root'));
serviceWorker.unregister();