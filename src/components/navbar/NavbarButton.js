import React, {Component, Componet} from 'react';
import {ProductConsumer} from '../../context';

export default class NavbarButton extends Component{
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    return(
                        <div>
                            
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}