import React, { Component } from 'react';
import Title from '../Title';
import ContactFrom, {ContactForm} from './ContactForm';
import StoreInformation from './StoreInformation';


export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="contact us" />
                <div className="container  mt-1">
                    <h4 className="text-center">Got a quation? We`d <i className="far fa-heart"></i> to help You!</h4>
                    <div className="row mx-auto">
                        <div className="col-10 col-lg-7">
                           <ContactFrom /> 
                        </div>
                        <div className="col-12 col-lg-4 mt-5 ">
                           <StoreInformation /> 
                        </div>
                    </div>
                </div>
                
            </React.Fragment> 
            );
    }
}