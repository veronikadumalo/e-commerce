import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm px-sm-5">
                <Link to="/" className="">
                    <img src={logo} alt="logo-store" className="navbar-brand logo-store " />
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <Link to="/" className="nav-link ">products</Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to="/contact" className="nav-link">contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="">
                            <button className="store-button">
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus mr-2" />
                                    my cart
                                </span>
                            </button>
                        </Link>
                    </li>
                </ul>
               
            </div>
        );
    }
}