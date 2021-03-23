import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import HoverImage from 'react-hover-image';



export default class Product extends Component {
    render() {
        const { id, title, price, img, inCart, imgOver } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container"
                                onClick={() => {
                                    value.handleDetail(id);
                                }}>
                                <Link to="/e-commerce/details">
                                    <HoverImage src={img}
                                        alt="product"
                                        className="card-img-top"
                                        hoverSrc={ imgOver}
                                    />
                                </Link>
                            </div>
                            )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between py-3 px-2">
                        <p className="text-capitalize align-self-center mb-0">{title}</p>
                        <p className="text-uppercase font-italic mb-0">{price}<span>uah</span></p>
                    </div>
                </div>
           
            </ProductWrapper>
        );
    } 
}

const ProductWrapper = styled.div`
.card{
border:none;  
transition:all 0.3s linear;     
}
.img-container{
position:relative;
overflow:hidden;
}
.card-footer{
background: transparent;
border-top: transparent;
transition:all 0.3s linear; 
}
.card-img-top:hover{
transition:all 1s linear; 
}
&:hover{
.card{
box-shadow:2px 2px 5px 0 rgba(0,0,0,0.1);
}
.card-footer{
background:rgba(252,252,252);
}
}
.cart-btn{
position:absolute;
bottom:0;
right: 0;
padding: 0.3rem 0.6rem ;
background: var(--mainRed);
color: var(--mainWhite);
border:none;
font-size: 1.4rem;
transform: translate(100%, 100%);
transition: all 0.4s linear;
}
.img-container:hover .cart-btn{
transform: translate(0, 0);
}
.cart-btn:hover{
color:var(--mainBrown);
cursor:pointer;
}
`;