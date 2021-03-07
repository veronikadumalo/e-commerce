import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';



export default class Product extends Component {
    render() {
        const { id, title, price, img, inCart } = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container ">
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                                <button
                                    className="cart-btn"
                                    disabled={inCart ? true : false}
                                >
                                    {inCart ? (
                                        <p className="text-capitalize" disabled>{" "}in cart</p>
                                    ) : (
                                            <i className="fas fa-cart-plus" />
                                            )}
                                </button>
                            </div>
                            )}
                    </ProductConsumer>
                    <div className="cart-footer d-flex justify-content-between">
                        <p className="text-capitalize align-self-center">{title}</p>
                        <p className="text-uppercase">{price}<span>uah</span></p>
                    </div>
                </div>
           
            </div>
        );
    } 
}