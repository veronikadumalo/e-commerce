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
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus mr-2" /> cart ({totalCartItem})
                                </span>
                            </button>
                        )
                    }
                    else{
                        return(
                            <button className="store-button">
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus mr-2" /> cart 
                                </span>
                            </button>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}