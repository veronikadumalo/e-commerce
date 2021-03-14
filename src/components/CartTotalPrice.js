import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotalPrice({ value }) {
    const { cartSubtotal, cartTax, cartTotal } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col mt-2 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn text-uppercase px-5"
                                type="button">
                                clear cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
}