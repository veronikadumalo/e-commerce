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
        selectedSize: null,
    };
    handleChange = (selectedSize) => {
        
        this.setState({selectedSize})
    };
    render() {
        const { selectedSize } = this.state;
        return (
    
            <Select
                value={selectedSize}
                onChange={this.handleChange}
                options={size}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: 'var(--mainRed)',
                        primary: 'var(--mainRed)',
                    }
                })}
                placeholder="Select size"
            />
            );
    }
}

