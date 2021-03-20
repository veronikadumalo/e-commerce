import React, { Component } from 'react';

export default class CartSubTitles extends Component {
    render() {
        return (
            <div className="container-fluid text-center text-uppercase d-none d-lg-block mt-5 ">
                <div className="row border-bottom">
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>product</p> 
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>name of product</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>price</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>quantitiy</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>remove</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p>total</p>
                    </div>
                </div>
            </div>
            );
    }
}