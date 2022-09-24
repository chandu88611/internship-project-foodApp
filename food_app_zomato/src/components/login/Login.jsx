import React, { Component } from 'react'
import "./Login.css"
import "../admin/ViewFoodDetails/ViewFoodDetails.css"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postUserDetails } from "../../actions/Actions"
 class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      fields:{
        userFirstName:"",
        userLastName:'',
        userEmail:'',
        passward:'',
        confirmPassward:""
      },
      errors:{
        userFirstName:"",
        userLastName:'',
        userEmail:'',
        passward:'',
        confirmPassward:""
      }
      ,show:false
    }
  }
  
  validate=(name,value)=>{
    switch (name) {
      case " userFirstName":
        if(!value){
          return "First Name is required"
        }else{
          return '';
        }
        
        case "userLastName":
          if(!value){
            return "Last Name is required"
          }else{
            return ''
          }  
           case " userEmail":
          if(!value){
            return "Email is required"
          }
          else{
            return '';
          }  
           case "passward ":
          if(!value){
            return "passward  is required"
          }else{
            return '';
          }
          case "confirmPassward ":
            if(!value){
              return "Confirm passward"
            }else{
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
    if(fields.userFirstName&&fields.userLastName&&fields.userEmail&&fields.passward&&fields.confirmPassward){
      const data={...fields};
      console.warn('user',data)
      this.props.postUserDetails(data)
    }
  }
  render() {
    const {fields}=this.state;
    return (
      
      <div className="login">
      <h2>Register</h2>
   <div className="contact_form">
  
     <section><div className="column">
       <form action="submit" className='form'  onSubmit={(e)=>this.handleSubmit(e)}>
              
         <input type="text"   name="userFirstName" placeholder='Enter First Name' onChange={e=>this.handleUserInput(e)} value={fields.userFirstName}/>
         <input type="text" name="userLastName" placeholder='Enter Last Name' onChange={e=>this.handleUserInput(e)} value={fields.userLastName}/>
         
         <input type="text"  name="userEmail" placeholder='Enter Your Email' onChange={e=>this.handleUserInput(e)} value={fields.userEmail}/>
         <input type="text" name="passward"  placeholder='Enter Passward' onChange={e=>this.handleUserInput(e)} value={fields.passward}/>
          <input type="text" name="confirmPassward"  placeholder='Confirm Passward' onChange={e=>this.handleUserInput(e)} value={fields.confirmPassward}/>
       
          {(fields.userFirstName&&fields.userLastName&&fields.userEmail&&fields.passward&&fields.confirmPassward&&this.state.show)?this.renderUserModel():null}
          <div className="submit" ><button   onClick={()=>this.setState({show:true})} >Register</button></div>
       </form>
       </div>

     </section>
   </div>
   </div>
    )

 
  }
  UserDetails(){

  
    
        window.location.reload()
    
      }
  renderUserModel(){

    return(  <div className="delete_container">
          <div className="second_con">
              <h5> User Details Added succesfully</h5>
              <div className="modal_body">
                  <p>Thank You!</p>
              </div>
              <div className="modal_footer">
                  <button  onClick={()=>this.UserDetails()
                    } className="delete">OK</button>
              </div>
          </div>
  
      </div>)
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
  return bindActionCreators({postUserDetails},dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);