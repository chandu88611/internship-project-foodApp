import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getUserDetails,postUserDetails} from "../../../actions/Actions"
// import "./ViewuserDetails.css"
 class ViewUserDetails extends Component {

    constructor(){
        super();
        this.state={
           userDetails:[],
         
        }
     
    }
    componentDidMount(){
        this.props.getUserDetails();
        console.log("userdetails"+this.state.userDetails)
    }
    static getDerivedStateFromProps(props,state){
if(props){
    return{
        userDetails:props.userDetails
    };
}
return null
    }
  render() {
    // const {params}=this.props.match
    return (
        <section className="user-details-section"  style={{ alignItems:"center",justifyContent:"center" ,display: "flex" ,flexDirection:"column",background:"black"}} >
            <h2 style={{color:"white",   fontFamily: 'Times New Roman, Times, serif'}}>User Details</h2>
            {this.renderTable()}
        </section>
    ) 
  }
  renderTable(page){
    if(this.state.userDetails&&this.state.userDetails.length>0){
        return(
            <div style={{background:"white" }} className="user_table">
            <table className="table">
            
            <tr  >
                <th   className='th'>SL NO</th>
                <th   className='th'>User Name</th>
                <th   className='th'>User Email</th>
          
                
   
   </tr>


  {this.state.userDetails.map((record,index)=>{
    return(
        
        <tr key={index} className="tr_br"  >
            <td  style={{color:"black",textShadow:"2px  -3px 5px grey"}}>{index+1}</td>
            <td   style={{color:"rgb(255, 0, 106)",textShadow:"2px -3px 5px grey"}} > {record.userFirstName} {record.userLastName}</td>
            
            <td style={{color:"blue",textShadow:"2px  -3px 5px grey"}}>{record.userEmail}</td>
           
            
         </tr>
    )
    })}

    

            </table>
            </div>
        )
    }
  }

 }



function mapStateToProps(state){
    return {
        userDetails:state.userDetails
    }
}
// we will dispatch an action here  'GET_LATEST_US_NEWS_HEAD_LINES'
function mapDispatchToProps(dispatch){
    return bindActionCreators({getUserDetails,postUserDetails},dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewUserDetails);