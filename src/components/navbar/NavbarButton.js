import React, {Component, Componet} from 'react';
import {ProductConsumer} from '../../context';

export default class NavbarButton extends Component{
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const {totalCartItem}=value;
                    if(totalCartItem>0){
                        return(
                            <button className="store-button">
                                <span className="mr-2 d-none d-lg-block">
                                    <i className="fas fa-cart-plus mr-2" /> cart ({totalCartItem})
                                </span>
                                <span className="d-lg-none d-xl-none ">
                                    <i className="fas fa-cart-plus d-inline mr-1" />({totalCartItem})
                                </span>
                            </button>
                        )
                    }
                    else{
                        return(
                            <button className="store-button ">
                                <span className="mr-2 d-none d-lg-block">
                                    <i className="fas fa-cart-plus mr-2" /> cart 
                                </span>
                                <span className="d-lg-none d-xl-none">
                                    <i className="fas fa-cart-plus " />
                                </span>
                            </button>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}