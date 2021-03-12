import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';
import SizeSelect from './SizeSelect';
import Size from './Size'




export default class Details extends Component {
    
    render() {
        
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, price, inCart } = value.detailProduct;
                  
                    return (
                        
                        <div className="container py-3 my-3">
                            <div className="row ">
                                <div className="col-10 col-md-6  mx-auto">
                                    < Slideshow />
                                </div>
                                <div className="col-10 col-md-6 mx-auto text-capitalize pl-5 pt-5 mt-5">
                                    <h1 className="">{title}</h1>
                                    <h4>{price}<span className="text-uppercase">uah</span></h4>
                                    <div className="row mx-auto my-5 align-items-end">
                                        <h5 className="mr-2">size:</h5>
                                        <div className="w-50">
                                            <SizeSelect />
                                            
                                        </div>
                                    </div>
                                    <div >
                                        <button className="detail-button mr-3"
                                            disabled={inCart ? true:false}
                                            onClick={() => {
                                                value.addToCart(id)
                                            }}
                                        >{inCart ? "in cart":"add to cart" }
                                        </button>
                                            <Link to="/">
                                                <button className="detail-button ">back to products</button>
                                            </Link>  
                                    </div>
                                    <Size/>
                                </div>
                            </div>
                            
                        </div>
                        );
                }}
            </ProductConsumer>
        );
    }
}