import React, { Component } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import "./Header.css"
export default class Header extends Component {
  constructor(){
    super()
    this.state={
      header:" Hurry! Up "
    }
  }
componentDidMount(){
  this.anime()
}
anime(){  setInterval(() => {
     this.state.header = this.state.header[this.state.header.length - 1] + this.state.header.substring(0, this.state.header.length - 1);
   this.setState({
    header:this.state.header
    
   })
    }, 800)}
  render() {
    return (
      <Router>
   <div position="stickey" className='header' > <div ><header className="mar" ><h1 >C Foods</h1>
  
   </header></div>
   <h3> 
   <a href="/" style={{textDecoration:"none", color:"black"}}>  Dashboard </a></h3>
   <h4>{this.state.header}</h4>
   
    <div className="register"> <h4><a href="/login"  style={{textDecoration:"none", color:"white"}}>Register</a> </h4></div>

   </div> 
   </Router>
    )
  }
}
