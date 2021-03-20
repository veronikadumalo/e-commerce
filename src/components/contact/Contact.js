import React, { Component } from 'react';
import Title from '../Title';
import ContactFrom, {ContactForm} from './ContactForm';


export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="contact" />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <ContactFrom /> 
                        </div>
                    </div>
                </div>
                
            </React.Fragment> 
            );
    }
}