import React from 'react';
import CartProduct from './CartProduct';

export default function CartProductsList({ value }) {
    const { cart } = value;
    return (
        <div>
            {cart.map(item => {
                return <CartProduct key={item.id} item={item} value={value}/>
            })}
        </div>
        );
}