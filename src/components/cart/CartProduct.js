import React from 'react';

export default function CartProduct({ item, value }) {
    const { id, img, title, price, count, total } = item;
    const { incrementCount, decrementCount, removeCartProduct } = value;
    return (
        <div className="row text-center border-bottom py-3 text-capitalize">
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <img src={img}
                    alt="product"
                    className="img-fluid cart-img"
                />
            </div>
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <span className="d-lg-none">Product: </span>{title}
            </div>
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <span className="d-lg-none">Price: </span>{price}<span>UAH</span>
            </div>
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <div className="">
                    <span className="cart-icon btn-count mx-2"
                        onClick={() => { decrementCount(id) }}
                    ><i className="fas fa-minus" /></span>
                    <span className="mx-2 ">{count}</span>
                    <span className="cart-icon btn-count mx-2"
                        onClick={() => { incrementCount(id) }}
                    ><i className="fas fa-plus" /></span>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <div className="cart-icon"
                    onClick={() => { removeCartProduct(id) }}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto my-auto">
                <span className="d-lg-none">total: </span>{total} <span>UAH</span>
            </div>
        </div>
        );
}