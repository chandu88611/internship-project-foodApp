import React, { Component } from 'react'
import "./AddFoodDetails.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postFoodDetails,updateFoodDetails } from '../../../actions/Actions'
 class AddFoodDetails extends Component {

  constructor(props){
    super(props)
    this.state={
      title:"Add Food Details",
      fields:{
        restaurentName:"",
        restaurentAddress:"",
        foodName:"",
        foodDescription:"",
        foodImage:'',
        foodCost:""
      },
      errors:{
        restaurentName:"",
        restaurentAddress:"",
        foodName:"",
        foodDescription:"",
        foodImage:'',
        foodCost:""
      },response:"",
      addNewFoodDetails:""
    }
  }
  validate=(name,value)=>{
    switch (name) {
      case " restaurentName":
        if(!value){
          return "Restaurent Name is required"
        }else{
          return '';
        }
        
        case "   restaurentAddress":
          if(!value){
            return "Restaurent Address is required"
          }else{
            return ''
          }  
           case " foodName":
          if(!value){
            return "Food Name is required"
          }else if(!value.match(`/^[a-zA-Z]+$/g`)) {
            return "Please enter valid food name"
          } 
          else{
            return '';
          }  
           case "foodDescription ":
          if(!value){
            return "Food Description  is required"
          }else{
            return '';
          }
          case "foodImage ":
            if(!value){
              return "Food Image is required"
            }else{
              return '';
            }
            case " foodCost":
              if(!value){
                return "Food cost is required"
              }else if(!value.match(`/^[0=9]+$/g`)) {
                return "Please enter valid food cost"
              } 
              else{
                return '';
              }  
      default:{
        return '';
      }
        
    }
  }
  handleUserInput=e=>{
    this.setState({
      errors:{
        ...this.state.errors,[e.target.name]:this.validate(e.target.name,e.target.value)
      },
      fields:{
        ...this.state.fields,[e.target.name]:e.target.value
      }
    })
  }

  handleSubmit=e=>{
    const {fields}=this.state;
    e.preventDefault()
    let validationErrors={};
    Object.keys(fields).forEach(name=>{
      const error=this.validate(name,fields[name]);
      if(error&&error.length>0){
        validationErrors[name]=error;

      }
    });
    if(Object.keys(validationErrors).length>0){
      this.setState({
        errors:validationErrors
      });
      return;
    }
    if(fields.foodCost&&fields.foodDescription&&fields.foodImage&&fields.foodName&&fields.restaurentAddress&&fields.restaurentName){
      const data={...fields};
      console.warn('food',data)
      this.props.postFoodDetails(data)
    }
  }
  render() {
    
    const {fields}=this.state;
    return (
      <div className="add_food">
      <h2>{this.props.title}</h2>
      <section>
      <form action="submit" onSubmit={event=>this.handleSubmit(event)}>
<div className="input_container">
  <input type="text" name="restaurentName" placeholder='Add Restaurent Name' onChange={e=>this.handleUserInput(e)} value={fields.restaurentName}/>
  
  <input type="text"  name="restaurentAddress" placeholder='Add Restaurent Address'onChange={e=>this.handleUserInput(e)} value={fields.restaurentAddress} />
  <input type="text"   name="foodName"  placeholder='Add Food Name' onChange={e=>this.handleUserInput(e)} value={fields.foodName}/>
  <input type="text"    name="foodDescription" placeholder='Add Food Descripton' onChange={e=>this.handleUserInput(e)} value={fields.foodDescription} />
  <input type="text"   name="foodImage"   placeholder='Add Food Image' onChange={e=>this.handleUserInput(e)} value={fields.foodImage}/>
  <input type="number"  name="foodCost" placeholder='Add Food Cost' onChange={e=>this.handleUserInput(e)} value={fields.foodCost} />
  
<div className="submit" ><button>{this.props.button}</button></div>
</div></form></section>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
      isLoaded:state.isLoaded,
      response:state.response
  }
}
// we will dispatch an action here  'GET_LATEST_US_NEWS_HEAD_LINES'
function mapDispatchToProps(dispatch){
  return bindActionCreators({ postFoodDetails,updateFoodDetails },dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(AddFoodDetails);