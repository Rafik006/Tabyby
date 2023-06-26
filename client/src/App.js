
import React,{useState} from 'react';

import SignUp from "./components/authentication/SignUp.jsx"
import Login from "./components/authentication/Login.jsx"
import DoctorsDashboard from './components/DoctorsDashboard.jsx';
import "./App.css"

import axios from 'axios';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [doctorData, setDoctorData] = useState(null);
  const [doctorClients,setClients]=useState([])
  const [view,setView]=useState("login")


  const handleView=(options)=>{
    setView(options)
  }
  const handleSignUp=(obj)=>{
    const {firstName,lastName,email,password}=obj
    console.log(firstName,lastName,email,password)
    axios
    .post('http://localhost:3004/thedoctor/register', {
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
      .post('http://localhost:3004/thedoctor/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setLoggedIn(true);
        setDoctorData(response.data);
        
        getDoctorClients(response.data.doctorsId)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const addClients=(obj,id)=>{
    console.log(obj)
    
    axios.post(`http://localhost:3004/thedoctor/addClients/${id}`,obj)
    .then(()=>getDoctorClients(id))
    .catch(err=>console.log(err))
  }
  const getDoctorClients=(id)=>{
    axios.get(`http://localhost:3004/thedoctor/getAllClients/${id}`)
    .then((res)=>{

      setClients(res.data)
    }).catch(err=>console.log(err))
  }
if(loggedIn){
  return <DoctorsDashboard addClients={addClients} doctorClients={doctorClients} doctorData={doctorData}  />
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
