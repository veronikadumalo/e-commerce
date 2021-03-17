import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Navbar';
import ProductsList from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'react-slideshow-image/dist/styles.css'
import SmallDetail from './components/SmallDetail';
import Home from './components/Home';


function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={ProductsList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/contact" component={Contact} />
                <Route component={Default} />
            </Switch>
            <SmallDetail />
            <Footer />
        </React.Fragment>
  );
}

export default App;
