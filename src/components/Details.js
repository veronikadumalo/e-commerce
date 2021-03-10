import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';
import SizeSelect from './SizeSelect';



export default class Details extends Component {
    
    render() {
        
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, price, info, inCart, size, selectedSize } = value.detailProduct;
                    return (
                        <div className="container py-3 my-3">
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto">
                                    <Slideshow />
                                </div>
                                <div className="col-10 col-md-6 mx-auto text-capitalize">
                                    <h1 className="">{title}</h1>
                                    <h4>{price}<span className="text-uppercase">uah</span></h4>
                                    <span>size:</span><SizeSelect />
                                </div>
                            </div>
                            
                        </div>
                        );
                }}
            </ProductConsumer>
        );
    }
}