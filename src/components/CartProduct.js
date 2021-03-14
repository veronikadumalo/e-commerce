import React from 'react';

export default function CartProduct({ item, value }) {
    const { id, img, title, proce, selectedSize, count, total } = item;
    const { inctementCount, decrementCount, removeCartProduct } = value;
    return (
        <div className="row">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img}
                    alt="product"
                    className="img-fluid cart-img"
                />
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p><span className="d-lg-none">Product: </span>{title}</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p><span className="d-lg-none">Price: </span>{price}<span>UAH</span></p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p><span className="d-lg-none">Size: </span>{selectedSize}</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <div className="justify-content-center">
                    <span className="btn mx-1"
                        onClick={() => { decrementCount(id) }}
                    >-</span>
                    <span className="btn mx-1">{count}</span>
                    <span className="btn mx-1"
                        onClick={() => { incrementCount(id) }}
                    >+</span>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon"
                    onClick={() => { removeCartProduct }}
                >
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p><span className="d-lg-none">total:</span>{total} <span>UAH</span></p>
            </div>
        </div>
        );
}