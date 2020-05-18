import React, {useEffect, useState} from 'react';
import './App.css';
import {Main} from "./App.style";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./pages/About";
import Portfolio from "./pages/portfolio/Portfolio";
import {Link, Route, Switch, useLocation} from "react-router-dom";

function App() {
    const [value, setValue] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/portfolio') {
            setValue(1);
        } else {
            setValue(0);
        }
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Main>
            <AppBar>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="About" to="/" component={Link} disabled={value === 0}/>
                    <Tab label="Portfolio" to="/portfolio" component={Link} disabled={value === 1}/>
                    {/*<a className="tab"*/}
                    {/*   href="https://www.notion.so/robvanderleek/To-Whom-It-May-Concern-9abe523d95d9479b97c0d29ad1b7e0a1"*/}
                    {/*   target="_blank" rel="noopener noreferrer"><Tab label="Blog"/></a>*/}
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route component={About}/>
            </Switch>
        </Main>
    );
}

export default App;
