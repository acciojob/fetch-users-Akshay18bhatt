
import React, { useEffect, useState } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {

  const[userDetails, setUserDetails]= useState([])

  function getUserDetails(){

    axios.get("https://reqres.in/api/users").then(response=>setUserDetails(response.data.data));
  }
  
  return (
    <div id="main">
        
        <div className="heading">
          <h1>Blue whales</h1>
          <button onClick={getUserDetails} className="btn">Get User List</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.length>0 ?userDetails.map(user=>{
              return(
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td><img src={user.avatar} /></td>
                </tr>
              )
            }) : "No data found to display."}
          </tbody>
        </table>
    </div>
  )
}

export default App
