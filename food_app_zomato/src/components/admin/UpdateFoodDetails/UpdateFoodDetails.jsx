import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getFoodDetails,updateFoodDetails} from "../../../actions/Actions"
import "../ViewFoodDetails/ViewFoodDetails.css"
import AddFoodDetails from "../Add_Food_Datails/AddFoodDetails"
 class UpdateFoodDetails extends Component {

    constructor(){
        super();
        this.state={
           foodDetails:[{_id:"632be4e484ad1d9472c894a5",restaurentName:"c foods",restaurentAddress:"tiptur 572254",foodName:"dosa",foodDescription:"south indian",foodImage:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",foodCost:"50"},{_id:"632be1fe7dd5ab1e5263ba2f",restaurentName:"Pie Hotel",restaurentAddress:"YT Road Albur","foodName":"pasta",foodDescription:"italian",foodImage:"https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=400",foodCost:"67"}],
           setUpdateDetails:{},
           setDeleteFDID:''
           ,show:false
        }
     
    }
    componentDidMount(){
        this.props.getFoodDetails();
        console.log("fooddetails"+   this.state.foodDetails)
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
            <h2> Update Food Details</h2>
            {/* {this.renderUpdateModel()} */}
            {this.state.show?this.renderUpdateModel():null}
            {this.renderTable()}
        </section>
    )
  }
  renderTable(page){
    if(this.state.foodDetails&&this.state.foodDetails.length>0){
        return(
            <div className="food_table">
            <table className="table">
            
            <tr>
                <th className='th'>SL NO</th>
                <th className='th'>Restaurent Name</th>
                <th className='th'>Restaurent Address</th>
                <th className='th'>Food Name</th>
                <th className='th'>Food Description</th>
                <th className='th'>Food Image</th>
                <th className='th'>Food Cost</th>
                <th className='th'> {this.renderActionHeader(page)}</th>
   
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
            <td><img  className='img3' onClick={()=>this.setState({show:true})} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAY1BMVEX///8AAACampqkpKS3t7f29vb7+/u/v7+ysrLJycm6uroqKirs7Ozj4+Orq6uBgYFqamrT09ORkZE+Pj4ZGRlRUVEkJCRdXV1JSUlEREQICAjZ2dl5eXkyMjJzc3MTExOJiYkJDGkMAAAEhklEQVR4nO2c6ZKyOhCGwRARWSMoZ0AH7/8qPxwXOgESEshSdXz/jsBDd9IbqfG8r7763wnbBvgIIdsEbyE/tI3wEvL9wDbDUz2Jn9mG+NODxA0H/ZE4YZUniQtr5UXigIPeJPYd9CGx7qCBxDYKILHsIEjiH50h8Q/OkNh0EENiKa7gJE3vDIlhB+E0zPLzLb5UXcOSNOYchKNTfWOfb95BOCpiHoUpByW7UojxkO5oi0+XRRy+5hCXnpZi9GqINo79cZlfXkJ7XSBJIcPh73RxeEcpDn0gWGaF9NLWFeLaEYuk/00/8Fb/ng5RO8o72iyS/kxhlIikz7+zuVifRSaC2Q9Khx8gUyAjizRFSI1MaBJ9i3W0Rs4hE7MoEn3bl9011TjLIhMgHhtHinT8G2QChI2sp6lkggyAJDRHPF2KfUj0zdv2dNKby/NIOwjjm6ad+Rla5JpoRW2bUvVIPFv5oCUWIX45sdgXit4386+EFoBEfRF+UgXB9K6Z/yESu4ZUj3uoDrMpkxScWhCJ14jwbXhKKgBS8XyMhCDd6y6JEskOmoTbSCHBu5LPbZQiH4Yb58z9acKv4qOhqihVVkoEI8maNpeKBZHCDWB45S1Xofa/4E61/PUYNuHrOn9oXYU1Cy//WfdRC59XuQcGk7WZLQP3usteTJVq6vniqQQMnc6y9k3BxKhcCeJ5wD3xXEKfU7ihczzvAO4mO1aBrl0/ByEr3isfLr2tXSb9QgEtUyF5LfCsQjAaCYRJ2VUHFuzvBiTAxLFcvIYRVrnSAgId0UUuyiagKd9isgoiNrfSGSsFVZJK+mTVDreTHEm23ZabuH8z5aCgk0TOxu6QuLNONO6dTi4Fbh1PQBqTjCfuxFiH8s62uRhODWVz8bb1Cdg60m3gtjUbnAjJfpXbto4F5flF1sLb1vYgYkvX9pv2OwG411W6sd2wB9xD+8p/Md2wLyag8eoUPA07/FWzAg9+iOIPYqYF3XORbdygCJySqXxZ3w8DmEbgXH5Og4OYWGnQNtTjApCMGzahbf1cBcRL3mtWsF4DbgBPqMMhipFptxCES5JDkKsaiIebBSCPMQCHBGbSFcG6N0onWCN/4XOehFAgaqvkob7FF7mm4pIwH0NWxIJwiUXmSRL6EJHGD1HvzDZDktIgtb5j+UHFJSHMuZk1cVoA8nnGJAm9a3SeQQRFxwRJkjMg8nWJAsgEScQeuyvVvuxIgoxIyOhE000fSDVLsif3igWJt+jyJ3Wgz1wCkiSoR+cxtxk3TCpkHvQiwe2x7sYYGi0SsI+6p22U5cXcYSZ9IBPm58jQrhHrqg3kKGeRTFtAO4gfDlSbyDULFCN92bddfEy3V67PIJ7MgdDr+kkUX8vcE+e6ObwlS7Y7H7TtXEpsqKd0OV+PBszxUjYRUZruEpfFLiBYW/yY0shBV0JawckPTZrJxTaUzdYnxhU4Q0KHOKskVDtjlwRaxTIJqN1skwwOsk7yiSv2SUTzE5PKnCF5OsgJEtHs0aQE81iTCp0h8ZAzJA79r4+vvjKmf8TiKkD+IWnNAAAAAElFTkSuQmCC" alt="" />    </td>
        
         </tr>
    )
    })}

    

            </table>
            </div>
        )
    }
  }

renderActionHeader(page){
    if(page!=="view"){
        return <th scope="col">Action</th>
    }else{
        return null;
    }
}
toggleUpdateModel(id){
    this.state.foodDetails.filter((data)=>{
        if(id===data._id){
            this.setState({
                setUpdateDetails:data
            })
        }
    })
}
renderUpdateModel(){
    return(
        <div className="update_container">
            <h5>Provide updte details</h5>
            <AddFoodDetails title="Update Food Details" />  
            <button>update</button><button onClick={()=>this.setState({show:false })}>close</button>
        </div>
    )
}
// renderActionButton(page,id){
//     if(page==="Update"){
//         return(
//             <td>
//                 <button type="button" className='btn' onClick={()=>this.toggleUpdteModal(id)} 
//                     title="update-food-details"
//                 ></button>
//             </td>
//         )
//     }else if(page==="Delete"){
//         return(
//             <td>
//                   <button type="button" className='btn' onClick={()=>this.toggleDeleteModal(id)}
//                         title="delete-food-details"
//                   ></button>
//             </td>
//         )
//     }
//     else{
//         return null
//     }
// }
}



function mapStateToProps(state){
    return {
        foodDetails:state.foodDetails
    }
}
// we will dispatch an action here  'GET_LATEST_US_NEWS_HEAD_LINES'
function mapDispatchToProps(dispatch){
    return bindActionCreators({getFoodDetails, updateFoodDetails},dispatch)  
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateFoodDetails);