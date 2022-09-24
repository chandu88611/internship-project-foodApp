import React, { Component } from 'react'
import "./Dashboard.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDetails } from '../../actions/Actions';
import { NavLink } from 'react-router-dom'
 class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      userDetails:[],
      totalUsers:''
    }
   

    
  }
  componentDidMount(props){
    this.props.getUserDetails();
  //  let c= typeof(this.state.userDetails)
  // let size =(this.state.userDetails).length;
    console.log("userdetails"+ this.state.userDetails)
    this.setState({totalUsers:"16"})
    
}
static getDerivedStateFromProps(props,state){
if(props){
return{
    userDetails:props.userDetails
}
}
return null
}
render() {

  return (
      <div className="main_dashboard">
        <div className="details_container">                                                                                                            
        <div className="details">
        <div className="f_b1"><img style={{height:"70px" , backgroundColor: 'aquamarine',borderRadius:"10px"}} src="./images/3377058_curry_food_green_thai_icon.png" alt="" /></div>
        <div className="f_b1"><button className="add_but"> <NavLink to="/Addfood" style={{textDecoration:"none", color:'white'}}>Add Food Details</NavLink> </button></div>  
        <div className="f_b1">
          <button className="view_but">  <NavLink to='/viewfooddetails:page' style={{textDecoration:"none", color:'white'}}> View Food Details</NavLink></button></div>
          <div className="f_b1">
          <button className="update_but"><NavLink to='/updatefooddetails:page' style={{textDecoration:"none", color:'black'}}> Update Food Details</NavLink></button></div>
          <div className="f_b1">
          <button className="delete_but"><NavLink to='/deletefooddetails:page' style={{textDecoration:"none", color:'white'}}>Delete Food Details </NavLink></button></div>
          
        </div>
            <div className="details">
            <div className="f_b1"><img style={{height:"70px", backgroundColor: 'aquamarine',borderRadius:"10px"}} src="./images/172626_user_male_icon.png" alt="" /></div>
            <div className="f_b1">
          <button className="delete_but"><NavLink to='/viewuserdetails:page' style={{textDecoration:"none", color:'white'}}>View User Details </NavLink></button></div>
         
            </div>
            <div className="details">
            <div className="f_b1"><img style={{height:"70px", backgroundColor: 'aquamarine',borderRadius:"10px"}} src="./images/1291768_delivery_fast_quick_truck_logistics_icon.png"  alt="" /></div>
            <div className="f_b1"><button className="view_but">View Order Details</button></div>
            <div className="f_b1"><button className="update_but">Update Order Details</button></div>
    
            </div>
        </div>
        <div className="info_container">``

            <div className="info"><h3>Total Users</h3>
           <h2>{this.state.totalUsers}</h2></div>
            
            <div className="info"><h3>Total Orders Placed</h3></div>
            <div className="info"><h3>Total Orders Complete</h3></div>
            <div className="info"><h3>Total Ordes Cancelled</h3></div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      userDetails:state.userDetails
  }
}
// we will dispatch an action here  'GET_LATEST_US_NEWS_HEAD_LINES'
function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserDetails},dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);