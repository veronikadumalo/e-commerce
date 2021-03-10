import React, { Component } from 'react';
import Select from 'react-select';

const size = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
]
export default class SizeSelect extends Component {
    state = {
        selectedSize: null
    };
    handleChange = selectedSize => {
        this.setState({ selectedSize });
        console.log(selectedSize);
    };
    render() {
        const { selectedSize } = this.state;
        return (
            <Select
                value={selectedSize}
                onChange={this.handleChange}
                options={size}
            />
            );
    }
}