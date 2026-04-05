import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF3355'
        },
        background: {
            default: '#000000'
        }
    },
});

function Index() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

const container = document.getElementById('root') as Element;
const root = ReactDOMClient.createRoot(container);
root.render(<Index/>);