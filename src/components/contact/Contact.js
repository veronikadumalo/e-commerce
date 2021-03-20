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
                    <div className="row">
                        <div className="col-7">
                           <ContactFrom /> 
                        </div>
                        <div className="col-4 ml-5 mt-5">
                           <StoreInformation /> 
                        </div>
                    </div>
                </div>
                
            </React.Fragment> 
            );
    }
}