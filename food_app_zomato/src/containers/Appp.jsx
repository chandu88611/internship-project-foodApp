import React from 'react'
import Header from "../components/common/Header/Header"
import Footer from "../components/common/Footer/Footer"
import Dashboard from '../components/admin/Dashboard'
import AddFoodDetails from '../components/admin/Add_Food_Datails/AddFoodDetails'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ViewFoodDetails from '../components/admin/ViewFoodDetails/ViewFoodDetails'
import UpdateFoodDetails from '../components/admin/UpdateFoodDetails/UpdateFoodDetails'
import DeleteFoodDetails from '../components/admin/DeleteFoodDetails/DeleteFoodDetails'
import Login from '../components/login/Login'
import ViewUserDetails from '../components/admin/viewUserDetails/ViewUserDetails'

const routing=(
  <Router>
    <Routes>
      <Route exact={true} path='/' element={ <Dashboard/>}/>
      
      <Route exact={true} path='/login' element={ <Login/>}/>
      <Route exact={true}  path='/Addfood' element={<AddFoodDetails title="Add Food Details" button="Add Food"/>}/>
      
      <Route exact={true}  path='/updatefooddetails:page' element={<UpdateFoodDetails/>}/>

      <Route exact={true}  path='/deletefooddetails:page' element={<DeleteFoodDetails/>}/>
      <Route exact={true}  path='/viewfooddetails:page' element={<ViewFoodDetails/>}/>
      
      <Route exact={true}  path='/viewuserdetails:page' element={<ViewUserDetails/>}/>
    </Routes>
  </Router>)

function Appp() {
  return (
    <div className="app">
       <Header/>
   {routing}
    <Footer className="footer"></Footer>
    </div>
  )
}

export default Appp