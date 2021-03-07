import React, { Component } from 'react';
import Title from './Title';

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="my cart" />
            </React.Fragment> 
        );
    }
}