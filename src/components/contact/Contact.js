import React, { Component } from 'react';
import Title from '../Title';
import ContactFrom, {ContactForm} from './ContactForm';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="contact" />
                <ContactFrom />
            </React.Fragment> 
            );
    }
}