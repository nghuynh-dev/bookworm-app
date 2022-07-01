import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from "../components/header";
import Banner from "../components/home/banner";
import Feature from "../components/home/feature";
import Error from "../components/error";
import Home from "./home";
import Footer from "../components/footer";

function App(){
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/sale">
                    <Feature />
                    <h2>NASDAQ</h2>
                </Route>
                <Route path='/error' component={Error} />
                <Redirect from='*' to='/error' />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
