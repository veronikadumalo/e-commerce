import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';


export default class Details extends Component {
    
    render() {
        
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, price, info, inCart, size, selectedSize } = value.detailProduct;
                    return (
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto">
                                    <Slideshow />
                                </div>
                                <div className="col-10 col-md-6 mx-auto">
                                    
                                </div>
                            </div>
                            
                        </div>
                        );
                }}
            </ProductConsumer>
        );
    }
}