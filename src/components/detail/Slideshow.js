import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';


export default class Slideshow extends Component {
    constructor(){
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }
    back() {
        this.slideRef.current.goBack();
    }
    next() {
        this.slideRef.current.goNext();
    }
    render() {
        
        return (
            <ProductConsumer>
                {value => {
                    const { moreImg } = value.detailProduct;
                    const properties = {
                        duration: 3000,
                        autoplay: false,
                        transitionDuration: 500,
                        arrows: false,
                        infinite: true,
                        easing: "ease",
                        indicators: (i) =>
                            <img src={moreImg[i]} className=" slideshow mx-2" />
                    };
                    return (
                        <div>
                            <div className="slide-container">
                            <Slide ref={this.slideRef} {...properties}>
                                {moreImg.map((each, index) => (
                                    <div
                                        key={index}
                                        className="each-slider">
                                        <img src={each} alt="productSlie" className="img-fluid" />
                                        
                                    </div>
                                    ))}
                                </Slide>
                            
                            </div>
                            
                            
                    </div>
                        );
                }}
            </ProductConsumer>
            );
    }
}

