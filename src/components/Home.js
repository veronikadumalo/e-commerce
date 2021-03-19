import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        const banner = "img/banner3.jpg";
        const homeImgOne = "img/homeone.jpg";
        const homeImgTwo = "img/black-sportsuit1.jpg";
        const homeImgThree = "img/grey-sportsuit.jpg";
        return (
            <div>
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-10 mx-auto">
                            <img src={banner} className="img-fluid" />
                            <Link to="/product">
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
                            <h3 className="text-uppercase ">comfort and style</h3>
                            <Link to="/product" className="see-more-text">
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