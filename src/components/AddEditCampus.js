import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import DisplayAllUsers from './AllCampusShow/DisplayAllCampus'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EditPage from './EditCampus/EditPage'
import '../style.css'

const AddEditUsersApp = (props) => {


  return (

<>


  <Router>
  <Routes>
  <Route path="/" element={<DisplayAllUsers/>}/>
  <Route path="/editPage" element={<EditPage/>}/>

</Routes>
  </Router>


</>

  )
}

export default AddEditUsersApp
