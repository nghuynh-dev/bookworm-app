import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ErrorComponent from "../components/error";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

import { Home, Detail, Shop, About } from "./index";
import Cart from "./cart";

function App() {
    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/about" component={About} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/cart" component={Cart} />
                <Route path='/error' component={ErrorComponent} />
                <Redirect from='*' to='/error' />
            </Switch>
            <FooterComponent />
        </Router>
    );
}

export default App;
