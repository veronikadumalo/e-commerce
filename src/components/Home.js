import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from './img/banner3.jpg';
import homeImgOne from './img/homeone.jpg';
import homeImgTwo from './img/black-sportsuit1.jpg';
import homeImgThree from './img/grey-sportsuit.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-10 mx-auto">
                            <img src={banner} className="img-fluid" />
                            <Link to="/e-commerce/product">
                                <button className="detail-button text-uppercase banner-button">
                                    start shoping
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-4 mb-4 d-flex align-items-center">
                        <div className="col-3">
                            <img src={homeImgTwo} alt="product" className="img-fluid" />
                        </div>
                        <div className="col-3">
                            <img src={homeImgOne} alt="product" className="img-fluid" />
                        </div>
                        <div className="col-3 text-center">
                            <h3 className="text-uppercase d-none d-xl-block">comfort and style</h3>
                            <p className="text-uppercase d-xl-none mb-0">comfort and style</p>
                            <Link to="/e-commerce/product" className="see-more-text">
                                see more <i className="fas fa-arrow-right align-middle" />
                            </Link>
                        </div>
                        <div className="col-3">
                            <img src={homeImgThree} alt="product" className="img-fluid" />
                        </div>
                    </div>
                </div>
                
            </div>
            );
    }
}