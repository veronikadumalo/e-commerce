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
                            <button className="detail-button p-3 mr-3" onClick={() => { value.sSize(id) }}>s</button>
                            <button className="detail-button p-3 mr-3" onClick={() => { value.mSize(id) }}>m</button>
                            <button className="detail-button p-3" onClick={() => { value.lSize(id) }}>l</button>
                        </div>
                    )
                    console.log(value.detailProduct);
                }}
            </ProductConsumer>
            )
    }
}