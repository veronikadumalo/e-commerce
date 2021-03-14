import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';


export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    console.log(cart);
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title title="my cart" />
                            </React.Fragment>
                        );
                    }
                    else {
                        return (
                            <React.Fragment>
                                <Title title="your cart is currently empty" />
                            </React.Fragment>
                        );
                    }
                }}
            </ProductConsumer> 
        );
    }
}