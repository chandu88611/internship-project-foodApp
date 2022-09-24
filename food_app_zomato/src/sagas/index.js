import {put,takeLatest,all} from "redux-saga/effects"

function* getFoodDetails(data){
    const records= yield fetch("http://localhost:3002/viewfooddetails"
    ).then(res=>res.json());
// const records=record.splice()
    yield put({type:"ADMIN_GET_FOOD_DETAILS_RECIEVED",foodDetails:records.data})
}

function*postFoodDetails(data){
    const result=yield fetch("http://localhost:3002/addfooddetails",{method:"POST",body: JSON.stringify(data.payload)
       ,headers:{'content-Type':"application/json"}

    ,mode:"cors"}).then(response=>response.json());
    yield put({type:"ADMIN_POST_GET_FOOD_DETAILS_RECIEVED",response:result,isLoaded:true})
}
function*deleteFoodDetails(data){
    const result=yield fetch("http://localhost:3002/deletefooddetails",{method:"DELETE",body: JSON.stringify(data.payload)
    ,headers:{'content-Type':"application/json"}
    ,mode:"cors"}).then(res=>res.json());
    
    yield put({type:"ADMIN_DELETE_FOOD_DETAILS_RECIEVED",response:result})
}
function*updateFoodDetails(data){
    const result=yield fetch("http://localhost:3002/updatefooddetails",{method:"PUT",body: JSON.stringify(data.payload)
    ,headers:{'content-Type':"application/json"}
 ,mode:"cors"}).then(res=>res.json());
    yield put({type:"ADMIN_POST_GET_FOOD_DETAILS_RECIEVED",response:result})
}
function*postUserDetails(data){
    const result=yield fetch("http://localhost:3002/postuserdetails",{method:"POST",body: JSON.stringify(data.payload)
    ,headers:{'content-Type':"application/json"}
    ,mode:"cors"}).then(response=>response.json());

    yield put({type:"USER_DETAILS_RECIEVED",response:result,isLoaded:true})
}
function*getUserDetails(data){
    const result=yield fetch("http://localhost:3002/viewuserdetails").then(response=>response.json());
        
    yield put({type:"GET_USER_DETAILS_RECIEVED",userDetails:result.data})
}
function*actionWatcher(){
    yield takeLatest("ADMIN_GET_FOOD_DETAILS",getFoodDetails)
    yield takeLatest("ADMIN_POST_FOOD_DETAILS",postFoodDetails)
    
    yield takeLatest("GET_USER_DETAILS",getUserDetails)
    yield takeLatest("USER_DETAILS",postUserDetails)
    yield takeLatest("ADMIN_DELETE_FOOD_DETAILS",deleteFoodDetails)
    yield takeLatest("ADMIN_UPDATE_FOOD_DETAILS",updateFoodDetails)
  
}
export default function*rootSaga(){
    yield all([actionWatcher()])
}