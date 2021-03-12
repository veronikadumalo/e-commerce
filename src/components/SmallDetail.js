import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class SmallDetail extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { openSmallDetail, closeSmallDetail } = value;
					const { img, title, price, selectedSize } = value.detailProduct;
					if (!openSmallDetail) {
						return null;
					}
					else {
						return (
							<div>
								<div className="container">
									<div className="row">
										<div className="col-8 mx-auto col-md-6 col-ld-4 text-center text-capitalize p-5">
											<h5>product added to cart</h5>
											<img src={img} alt="product" className="img-fluid" />
											<h5>{title}</h5>
											<h5>{price}<span className="text-uppercase">uah</span></h5>
											<Link>
												<button
													className="detail-button"
													onClick={() => {

												}}>continue shopping
												</button>
											</Link>
											<Link>
												<button
													className="detail-button"
													onClick={() => {

												}}>go to cart
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
							);
					}
				}}
			</ProductConsumer>
			);
	}
}