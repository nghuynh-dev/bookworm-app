import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import ErrorComponent from "../components/error";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

import Home from "./home";
import About from "./about";
import Shop from "./shop";

function App() {
    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path='/error' component={ErrorComponent} />
                <Redirect from='*' to='/error' />
            </Switch>
            <FooterComponent />
        </Router>
    );
}

export default App;
