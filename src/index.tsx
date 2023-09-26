import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#c3c3c3'
        }
    },
});

function Index() {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}><App/></ThemeProvider>
        </HashRouter>
    );
}

const container = document.getElementById('root') as Element;
const root = ReactDOMClient.createRoot(container);
root.render(<Index/>);