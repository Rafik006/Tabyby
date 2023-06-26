import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddPatient from './AddPatient.jsx'
import "../App.css"

const Home = (props) => {
const[clients,setClients]=useState([])
const[showForm,setShow]=useState(false)

console.log(props.doctorData)
useEffect(()=>{
  axios.get(`http://localhost:3004/thedoctor/getAllClients/${props.doctorData.doctorsId}`)
  .then((res)=>{
    console.log("yes",res.data)
      setClients(res.data)
  }).catch(err=>console.log(err))

},[setShow])

const handleFetch=(option)=>{
  setShow(option)
}


     
  return (
    <div className='home'>
      <div className='header'> 
        <h3>Your Patients</h3>
        <p  className="addd" onClick={()=>{
          handleFetch(true)
        }}>Add New Patient</p>
      </div>
      <div className='clients-container'>
        {clients.map(client=>{
          return (
              <div className='client' key={client.clientsId}>
                  
                    <p>{client.firstName} {client.lastName}</p>
                        <p>
                          28 years old
                        </p>
                    <p>email : {client.email}</p>

              </div>
          )
        }


        )}
      </div>
      {showForm ?<AddPatient handleFetch={handleFetch} id={props.doctorData.doctorsId} addClients={props.addClients} />:""}

    </div>
  )
}

export default Home
