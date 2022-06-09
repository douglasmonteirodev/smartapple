import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Product} />
                <Route exact path='/products/:id' component={ProductDetails} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
        </>
    );
}

export default App;
