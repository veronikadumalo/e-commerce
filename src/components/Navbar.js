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
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link ">products</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/aboutus" className="nav-link">about us</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/contact" className="nav-link">contact</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="store-button">
                        <span className="mr-2">
                            <i className="fas fa-cart-plus mr-2" />
                            my cart
                        </span>
                    </button>
                </Link>
            </div>
        );
    }
}