import React, {Component} from 'react';

export default class StoreInformation extends Component{
    render(){
        return(
            <div className="container text-capitalize text-center ">
                <h5 className="text-uppercase mb-4 ">contact info</h5>
                <div className="row ">
                    <i className="fas fa-phone mr-4"></i>
                    <p>+38 063 567-43-45 </p>
                </div>
                <div className="row ">
                    <i class="fas fa-map-marker-alt mr-4"></i>
                    <p>12 ivana franka street, lviv 79021</p>
                </div>
                <div className="row text-lowercase ">
                    <i class="fas fa-envelope mr-4"></i>
                    <p>mockostore@gmail.com</p>
                </div> 
            </div>
        )
    }
}