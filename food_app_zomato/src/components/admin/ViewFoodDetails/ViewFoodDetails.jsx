import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getFoodDetails,deleteFoodDetails} from "../../../actions/Actions"
import "./ViewFoodDetails.css"
 class ViewFoodDetails extends Component {

    constructor(){
        super();
        this.state={
           foodDetails:[{_id:"632be4e484ad1d9472c894a5",restaurentName:"c foods",restaurentAddress:"tiptur 572254",foodName:"dosa",foodDescription:"south indian",foodImage:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",foodCost:"50"},{_id:"632be1fe7dd5ab1e5263ba2f",restaurentName:"Pie Hotel",restaurentAddress:"YT Road Albur","foodName":"pasta",foodDescription:"italian",foodImage:"https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=400",foodCost:"67"}],
           setUpdateDetails:{},
           setDeleteFDID:''
        }
     
    }
    componentDidMount(){
        this.props.getFoodDetails();
        console.log("fooddetails"+this.state.foodDetails)
    }
    static getDerivedStateFromProps(props,state){
if(props){
    return{
        foodDetails:props.foodDetails
    };
}
return null
    }
  render() {
    // const {params}=this.props.match
    return (
        <section className="food-details-section">
            <h2>Food Details</h2>
            {this.renderTable()}
        </section>
    )
  }
  renderTable(page){
    if(this.state.foodDetails&&this.state.foodDetails.length>0){
        return(
            <div className="food_table">
            <table className="table">
            
            <tr className='th'>
                <th className='th'>SL NO</th>
                <th className='th'>Restaurent Name</th>
                <th className='th'>Restaurent Address</th>
                <th className='th'>Food Name</th>
                <th className='th'>Food Description</th>
                <th className='th'>Food Image</th>
                <th className='th'>Food Cost</th>
                
   
   </tr>


  {this.state.foodDetails.map((record,index)=>{
    return(
        
        <tr key={index} className="tr_br">
            <td>{index+1}</td>
            <td>{record.restaurentName}</td>
            
            <td>{record.restaurentAddress}</td>
            <td>{record.foodName}</td>
            <td>{record.foodDescription}</td>
            <td><img src={record.foodImage} alt="" className='image2' /></td>
            <td>{record.foodCost}</td>
            
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
        foodDetails:state.foodDetails
    }
}
// we will dispatch an action here  'GET_LATEST_US_NEWS_HEAD_LINES'
function mapDispatchToProps(dispatch){
    return bindActionCreators({getFoodDetails,deleteFoodDetails},dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewFoodDetails);