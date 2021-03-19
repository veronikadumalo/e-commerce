import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotalPrice({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart  } = value;
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-1 text-capitalize text-right ">
                        <Link to="/">
                            <button className="text-uppercase mb-5 detail-button"
                                type="button"
                                onClick={clearCart}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title my-1">subtotal:</span>
                            {cartSubtotal}
                        </h5>
                        <h5>
                            <span className="text-title my-1">tax:</span>
                            {cartTax}
                        </h5>
                        <h5>
                            <span className="text-title my-1">total:</span>
                            {cartTotal}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
}