import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () =>{
const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
 .then(function (response) {
   // handle success
   console.log(response);
   setUsers(response.data)
 })
 .catch(function (error) {
   // handle error
   console.log(error);
 })
    })

    return(
        <div>
            {users.map((user)=>{
                return <div className="txt">
                    <h1>{user.name}</h1>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    </div>
            })}

        </div>
    )
}

export default UserList