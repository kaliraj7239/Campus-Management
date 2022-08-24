import React,{createContext,useState} from 'react'
import {allUsers} from '../components/AllCampus'

export const UserContext=createContext()

export const UserContextProvider = (props) =>{

const [allUsersData,setAllUsersData]=useState(allUsers)



const [addUserValue, setAddUserValue] = useState({
  id:"",
  name: "",
  lastName: "",
  citty: "",
  blockNumber:"",
});

const onChangeAddUser = (e) => {
  const name = e.target.name;
  const value = e.target.value.trim();
  const typeOfInput= e.target.type


if(e.target.type=="number"){
  if(e.target.value.length <= 6){

  setAddUserValue({ ...addUserValue, [name]:value});
}
}else{
  setAddUserValue({ ...addUserValue, [name]: value });
}


};

const [errorInput,setErrorInput]=useState("")//set error message
const [errorSuccess, setErrorSuccess] = useState("");
const addUserClick = (e) => {//add user on click button
  e.preventDefault();
  const allUSerConst = {
    id: allUsersData.length + 1,
    name: addUserValue.name,
    lastName: addUserValue.lastName,
    citty: addUserValue.citty,
    blockNumber:addUserValue.blockNumber,
  };
  const blockNumberFilter = allUsersData.filter(
    (blockNumber) =>
    blockNumber.blockNumber== allUSerConst.blockNumber
  );

  if (
    allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.passportNumber &&
    blockNumberFilter.length <= 0&&
    allUSerConst.blockNumber.length === 6
  ) {
    setErrorSuccess("Sucsessfuly Added!");
    setErrorInput("");
    setTimeout(() => {
  setErrorSuccess("");
}, 3000);
    setAllUsersData([...allUsersData, allUSerConst]);
    addUserValue.name = "";
    addUserValue.lastName = "";
    addUserValue.citty = "";
    addUserValue.blockNumber = "";
  }
  else if(allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.blockNumber.length < 6
  ){
    setErrorInput("Block number must contain 6 numbers");
  }
  else if(allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.blockNumber &&
    allUSerConst.blockNumber.length === 6 &&
    blockNumberFilter.length >= 0){
    setErrorInput("Block number alredy exist");
  }
  else{
      setErrorInput("All fields must be field");
  }
}




const [editUserRow,setEditUserRow]=useState('')
const [linkToEditPage,setLinkToEditPage]=useState("/editPage")
const [editValues,setEditedValues]=useState('')

const editUser = (e) => {//button edit
  // e.preventDefault();
  const currentElement = e.target.getAttribute("data-index");
  const currentElFilter = allUsersData.filter(
    (blockNumber) =>
    blockNumber.id === parseInt(currentElement)
  );
    setErrorInput("");
setEditedValues(currentElFilter[0])

}


const deleteUser = (e) => {  
  e.preventDefault();
  const currentEl = e.target.getAttribute("data-index");
  const allUsersFilter = allUsersData.filter((all) => all.id != currentEl);
  setAllUsersData(allUsersFilter);
};





const [editError, setEditError] = useState("");
const [backToMainPage, setBackToMainPage] = useState("/");
const submitEdited = (e) => {

  const current = {
    id: editValues.id,
    name: editValues.name,
    lastName: editValues.lastName,
    citty: editValues.citty,
    blockNumber: editValues.blockNumber,
  };

  const replacedItem = allUsersData.map((allData) => {    

    {
      return allData.id == current.id ? current : allData;
    }
  });

  const blockNumber = allUsersData.filter(
    (all) =>
      all.blockNumber == parseInt(current.blockNumber) && all.id != current.id
  );


  if (sameblockNumber.length > 0) {
    setEditError("Block number alredy exists");

    e.preventDefault();
  } else if (
    !current.id ||
    !current.name ||
    !current.lastName ||
    !current.citty
  ) {
    setEditError("Fields can't be empty");

    e.preventDefault();
  } else if (
    current.id &&
    current.name &&
    current.lastName &&
    current.citty &&
    current.blockNumber.length < 6
  ) {
    setEditError("Block number should contains minimum 6 numbers");

    e.preventDefault();
  } else {
      setEditError("");

    setAllUsersData(replacedItem);
    editValues.id = "";
    editValues.name = "";
    editValues.lastName = "";
    editValues.citty = "";
    editValues.blockNumber = "";
  }
};

const backBtnEditPage=()=>{
  setEditError("");
}

const onChangeEditUser=(e)=>{
  const name=e.target.name
  const value=e.target.value.trim()
  if(e.target.type=="number"){
    if(e.target.value.length <= 6){
      setEditedValues({ ...editValues, [name]: value.trim() });
    }
  }else{
    setEditedValues({ ...editValues, [name]: value });
  }
}


return(
<UserContext.Provider
  value={[
    { allUsersData: allUsersData },
    { onChangeAddUser: onChangeAddUser },
    { addUserValue: addUserValue },
    { addUserClick: addUserClick },
    { errorInput: errorInput },
    { editUser: editUser },
    { submitEdited: submitEdited },
    { editValues: editValues },
    { onChangeEditUser: onChangeEditUser },
    { editError: editError },
    { linkToEditPage: linkToEditPage },
    { backToMainPage: backToMainPage },
    { deleteUser: deleteUser },
    { errorSuccess: errorSuccess },
    {backBtnEditPage:backBtnEditPage}
  ]}
>
  {props.children}
</UserContext.Provider>

)
}
