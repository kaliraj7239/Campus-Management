import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import AllUsersJSX from './AllCampusJSX'
import AddNewUser from '../AddNewCampus/AddNewCampus'
import {UserContext} from '../../Contexts/userContext'


const DisplayAllUsers = (props) => {
const value=useContext(UserContext)

  return (
  <>
  <div id="allUsersDisplay">
  <div className="description">
<p>* Input fields must not be blank.</p>
  </div>
  <AddNewUser/>
  <div id="tableUsers">
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th>Campus No</th>
      <th>Name</th>
      <th>Location</th>
    <th>Block Number</th>
  <th></th>
<th></th>
    </tr>
  </thead>
  <tbody>
    {value[0].allUsersData.map((allUsers) => {
      return <AllUsersJSX {...allUsers}
        key={allUsers.id}
         editUser={value[5].editUser}
         linkToEditPage={value[10].linkToEditPage}
         deleteUser={value[12].deleteUser} />;
    })}
  </tbody>
</table>
</div>
</div>


  </>
  )
}

export default DisplayAllUsers
