import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Search from './Search'


class App extends Component {
  constructor(props){
    super();
    
    this.state=
    {
      counter:0,
      searchQuery:""
    };
       this.handleSearchClick=this.handleSearchClick.bind(this)
  this.handleChange=this.handleChange.bind(this)
  this.handleAdd=this.handleAdd.bind(this)
  this.handleRemove=this.handleRemove.bind(this)
  }
  handleAdd(data){
    console.log(data)
  let currentState=this.state;
      currentState.counter++;
      this.setState(currentState);
  }
  handleRemove(data){
    let currentState=this.state;
    if(currentState.counter==0){
      this.setState(currentState);
    }
    else{
      currentState.counter--;
      this.setState(currentState);

    }
  }
  handleSearchClick(data)
  {
      console.log(data)
  let currentState=this.state;
      currentState.counter++;
      this.setState(currentState);
        }
          handleChange(data)
          {
          
           let currentState=this.state;
            currentState.searchQuery=data;
            this.setState(currentState);
  }
 

  render() {
    return (
      <div className="App">
      <Header add={this.state.counter}/>
      <Search  Search={this.handleSearchClick} SearchText={this.handleChange}/>
      
      <ProductList count={this.handleAdd} remove={this.handleRemove} search={this.state.searchQuery}/>
     
      </div>
    );
  }
}

export default App;
