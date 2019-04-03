import React, { Component } from 'react';
import Button from './Button';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
           <div className="container">
           <div className="card">
           <div className="card-body">
         <h5>Name:{this.props.details.name}</h5>      
    <h5>Image:<img src={this.props.details.image_url}></img></h5>
    <h5>Price:{this.props.details.salePrice}</h5>
    <h5>Description:{this.props.details.shortDescription}</h5>
    <Button add1={this.props.addCount} remove2={this.props.remove1}/>
    </div>
    </div>
           </div>
        )
    }
}
