
import React,{useState} from 'react';
import {createBrowserRouter,createRoutesFromElements,Link,Route} from "react-router-dom"
import SignUp from "./components/authentication/SignUp.jsx"
import Login from "./components/authentication/Login.jsx"
import DoctorsDashboard from './components/DoctorsDashboard.jsx';
import "./App.css"

import axios from 'axios';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [view,setView]=useState("login")


// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root/>} >

//     </Route>
//   )
// )
  const handleView=(options)=>{
    setView(options)
  }
  const handleSignUp=(obj)=>{
    const {firstName,lastName,email,password}=obj
    console.log(firstName,lastName,email,password)
    axios
    .post('http://localhost:3003/thedoctor/register', {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "password":password,
    })
    .then((response) => {
      console.log(response.data);
      setView("login")
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};


  const handleLogin = (email,password) => {
   

    // Send a POST request to login endpoint
    axios
      .post('http://localhost:3003/thedoctor/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setLoggedIn(true);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
console.log("user ",userData)
if(loggedIn){
  return <DoctorsDashboard userData={userData}  />
}
if(view==="signup"){
  return <SignUp handleSignUp={handleSignUp} handleView={handleView} />
}else if(view==="login"){
  return <Login handleLogin={handleLogin} handleView={handleView}/>
}
  return (
    <div className="App">

      
      

    </div>
  );
}

// const Root=()=>{
//   return (
//       <div>
//           <div><Link>sign</Link></div>
//           <div><Link>signup</Link></div>
//      </div>
//   )
// }
export default App;
