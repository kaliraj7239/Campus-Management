import React from 'react'
import ReactDOM from 'react-dom';
import {UserContextProvider} from './Contexts/userContext'
import AddEditUsersApp from './components/AddEditCampus'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

<div className="App">
  <UserContextProvider>
      <AddEditUsersApp />
  </UserContextProvider>

</div>


  );
}


export default App;
