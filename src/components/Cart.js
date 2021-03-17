import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import CartSubTitles from './CartSubTitles';
import CartProductsList from './CartProductsList';
import CartTotalPrice from './CartTotalPrice';


export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer className="height-container">
                {value => {
                    const { cart } = value;
                    console.log(cart);
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title title="my cart" />
                                <CartSubTitles />
                                <CartProductsList value={value} />
                                <CartTotalPrice value={value} />
                            </React.Fragment>
                        );
                    }
                    else {
                        return (
                            <React.Fragment>
                                <div className="h-100">
                                    <Title title="your cart is currently empty" />
                                </div> 
                            </React.Fragment>
                        );
                    }
                }}
            </ProductConsumer> 
        );
    }
}