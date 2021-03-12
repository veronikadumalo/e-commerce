import React, { Component } from 'react';
import { ProductConsumer } from '../context';

export default class Size extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id } = value.detailProduct;
                    return (
                        <div>
                            <button onClick={() => { value.sSize(id) }}>s</button>
                            <button onClick={() => { value.mSize(id) }}>m</button>
                            <button onClick={() => { value.lSize(id) }}>l</button>
                        </div>
                    )
                    console.log(value.detailProduct);
                }}
            </ProductConsumer>
            )
    }
}