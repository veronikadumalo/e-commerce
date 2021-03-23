import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';
import NavbarButton from './NavbarButton';

export default class Navbar extends Component {
    render() {
        return (
                        <div className="navbar navbar-expand px-sm-5">
                            <Link to="/e-commerce" className="">
                                <img src={logo} alt="logo-store" className="navbar-brand logo-store " />
                            </Link>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-md-3">
                                    <Link to="/e-commerce/product" className="nav-link ">products</Link>
                                </li>
                                <li className="nav-item mr-md-4">
                                    <Link to="/e-commerce/contact" className="nav-link">contact</Link>
                                </li>
                                <li className="">
                                    <Link to="/e-commerce/cart" className="">                                       
                                        <NavbarButton />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    
        );
    }
}