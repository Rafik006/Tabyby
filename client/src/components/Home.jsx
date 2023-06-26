import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = (props) => {
const[clients,setClients]=useState([])
console.log(props.doctorData)
useEffect(()=>{
  axios.get(`http://localhost:3004/thedoctor/getAllClients/${props.doctorData.doctorsId}`)
  .then((res)=>{
    console.log("yes",res.data)
      setClients(res.data)
  }).catch(err=>console.log(err))

},[])




     
  return (
    <div className='home'>
      <div className='header'> 
        <h3>Your Patients</h3>
        <h3>Add New Patient</h3>
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

    </div>
  )
}

export default Home
