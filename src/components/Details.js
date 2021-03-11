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
                    const { id, title, price,  inCart, size, selectedSize } = value.detailProduct;
                    return (
                        <div className="container py-3 my-3">
                            <div className="row ">
                                <div className="col-10 col-md-6  mx-auto">
                                    <Slideshow className="" />
                                </div>
                                <div className="col-10 col-md-6 mx-auto text-capitalize pl-5 pt-5 mt-5">
                                    <h1 className="">{title}</h1>
                                    <h4>{price}<span className="text-uppercase">uah</span></h4>
                                    <div className="row mx-auto my-5 align-items-end">
                                        <h5 className="mr-2">size:</h5>
                                        <div className="w-50">
                                            <SizeSelect  />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="detail-button "
                                            onClick=""
                                        >add to cart</button>
                                        <Link to="/">
                                            <button className="detail-button ml-4">back to products</button>
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        );
                }}
            </ProductConsumer>
        );
    }
}