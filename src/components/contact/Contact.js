import React, { Component } from 'react';
import Title from '../Title';
import ContactFrom, {ContactForm} from './ContactForm';
import StoreInformation from './StoreInformation';


export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="contact us" />
                <div className="container mb-5 mt-1">
                    <h4 className="text-center">Got a quation? We`d <i className="far fa-heart"></i> to halp you</h4>
                    <div className="row mx-auto">
                        <div className="col-10 col-lg-7 mx-auto">
                           <ContactFrom /> 
                        </div>
                        <div className="col-10  col-lg-4 ml-lg-5 mt-5 mx-auto">
                           <StoreInformation /> 
                        </div>
                    </div>
                </div>
                
            </React.Fragment> 
            );
    }
}