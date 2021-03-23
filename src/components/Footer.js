import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer className=" mt-3">
                <div className="container pt-3">
                    <div className="row ">
                        <div className="col-lg-6 col-9 mb-md-0 mr-auto">
                            <div className="d-flex align-items-start">
                                <img src={logo} alt="logo" className="img-fluid logo mr-3" />
                                <div>
                                    <p className="text-uppercase mb-0 pt-1">12 ivana franka street</p>
                                    <p className="text-uppercase mb-0">lviv 79021</p>
                                    <p className="text-uppercase mb-0">+38 063 567-43-45 </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-3 col-md-2 mb-md-0 d-flex justify-content-center">
                            <h5 className="text-capitalize my-auto d-none d-lg-block">follow us</h5>
                            <ul className="list-inline my-auto">
                                <li className="list-inline-item ml-lg-3 ml-md-1"><Link to=""><i className="fa fa-instagram" /></Link></li>
                                <li className="list-inline-item ml-1"><Link to=""><i className="fa fa-facebook" /></Link></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="row mt-sm-3 mt-lg-1">
                        <div className="col text-center mx-auto">
                            <p className="text-capitalize mb-0">copyright &copy; {new Date().getFullYear()}, veronika Dumalo</p>
                        </div>
                        
                    </div>  
                </div>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled.div`
background: var(--mainRed);
color: var(--mainBrown);
font-size: 0.8rem;
@media screen and (max-width: 600px) {
    font-size: 0.6rem;
}
.logo{
width:5rem;
height:auto;
}
.fa{
color:var(--mainBrown);
font-size: 1.4rem;
cursor: point;
}
.fa:hover{
color:var(--mainWhite);
}
`