import React from 'react';

export default function CartProduct({ item, value }) {
    const { id, img, title, price, selectedSize, count, total } = item;
    const { incrementCount, decrementCount, removeCartProduct } = value;
    return (
        <div className="row text-center border-bottom py-3">
            <div className="col-10 col-lg-1 mx-auto">
                <img src={img}
                    alt="product"
                    className="img-fluid cart-img"
                />
            </div>
            <div className="col-10 col-lg-1 mx-auto">
                <p><span className="d-lg-none">Product: </span>{title}</p>
            </div>
            <div className="col-10 col-lg-1 mx-auto  align-middle">
                <p><span className="d-lg-none">Price: </span>{price}<span>UAH</span></p>
            </div>
            <div className="col-10 col-lg-1 mx-auto  align-middle">
                <p><span className="d-lg-none">Size: </span>{selectedSize}</p>
            </div>
            <div className="col-10 col-lg-1 mx-auto">
                <div className="">
                    <span className="btn"
                        onClick={() => { }}
                    >-</span>
                    <span className="btn">{count}</span>
                    <span className="btn"
                        onClick={() => {  }}
                    >+</span>
                </div>
            </div>
            <div className="col-10 col-lg-1 mx-auto">
                <div className="cart-icon"
                    onClick={() => {  }}
                >
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 col-lg-1 mx-auto">
                <p><span className="d-lg-none">total:</span>{total} <span>UAH</span></p>
            </div>
        </div>
        );
}