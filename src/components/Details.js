import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, price, img, moreImg, info, inCart, size, selectedSize } = value.detailProduct;
                    return (
                        <div className="container py-3">
                        <div className="row">
                            <div className="col-10 mx-auto text-center my-5 text-capitalize">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    
                                </div>
                        </div>
                    </div>
                        );
                }}
            </ProductConsumer>
        );
    }
}