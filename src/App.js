import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Details from './components/detail/Details';
import Default from './components/navbar/Navbar';
import ProductsList from './components/products/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contact/Contact';
import 'react-slideshow-image/dist/styles.css'
import SmallDetail from './components/detail/SmallDetail';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch >
                <Route exact path="/e-commerce" component={Home}/>
                <Route path="/e-commerce/product" component={ProductsList} />
                <Route path="/e-commerce/details" component={Details} />
                <Route path="/e-commerce/cart" component={Cart} />
                <Route path="/e-commerce/contact" component={Contact} />
                <Route component={Default} />
            </Switch>
            <SmallDetail />
            <Footer />
        </React.Fragment>
  );
}

export default App;
