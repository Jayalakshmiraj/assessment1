import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="jumbotron">
            <h1>Cart</h1>      
           <label className="badge" >{this.props.add}</label>
          </div>
        )
    }
}
