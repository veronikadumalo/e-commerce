import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

export default class SmallDetail extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { smallDetail, closeSmallDetail } = value;
					const { img, title, price } = value.smallDetailProduct;
					if (!smallDetail) {
						return null;
					}
					else {
						return (
							<SmallDetailContainer>
								<div className="container">
									<div className="row">
										<div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4 detail-card">
											<h5>product added to cart</h5>
											<img src={img} alt="product" className="img-fluid p-3" />
											<h4>{title}</h4>
											<h6>{price}<span className="text-uppercase">uah</span></h6>
											<Link to="/product">
												<button
													className="detail-button"
													onClick={() => {
														closeSmallDetail();
												}}>continue shopping
												</button>
											</Link>
											<Link to="/cart">
												<button
													className="detail-button"
													onClick={() => {
														closeSmallDetail();
												}}>go to cart
												</button>
											</Link>
										</div>
									</div>
								</div>
							</SmallDetailContainer>
							);
					}
				}}
			</ProductConsumer>
			);
	}
}

const SmallDetailContainer = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
display:flex;
align-items:center;
justufy-content:center;
background: rgba(0,0,0,0.2);
.detail-card{
background:var(--mainWhite);
}
`;