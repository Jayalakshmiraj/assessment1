import React, { Component } from 'react';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
           <div>
      <button className="btn btn-primary" onClick={()=>{this.props.add1("i am clicked")}}>Add cart</button>&nbsp;
      <button className="btn btn-success" onClick={()=>{this.props.remove2("i am clicked")}}>Remove cart</button>
  
           </div>
        )
    }
}
