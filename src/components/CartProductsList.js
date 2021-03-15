import React from 'react';
import CartProduct from './CartProduct';

export default function CartProductsList({ value }) {
    const { cart } = value;
    return (
        <div>
            {cart.map(item => {
                return <CartProduct key={item.size} item={item} value={value}/>
            })}
        </div>
        );
}