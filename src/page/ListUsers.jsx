import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListUsers() {

    //Declaration d'un tableau en java en lui donnant un getter et un setter
    const [tabUsers, setTabUsers] = useState([])


    //les apelles qui risque d'affecter le projet ou tes composant
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setTabUsers(res.data))
            .catch(err => console.log(err))
    }, []);


    const [tabUsers2, setTabUsers2] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => setTabUsers2(res.data))
            .catch(err => console.log(err))
    }, []);


    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Longitiude</th>
                    <th scope="col">Latitude</th>


                </tr>
            </thead>
            <tbody>
                {
                    tabUsers.map((data,i) => (
                        <tr key={i}>
                        <th scope="row">{data.id}</th>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.address.city}</td>
                        <td>{data.address.geo.lng}</td>
                        <td>{data.address.geo.lat}</td>
                        </tr>
                    ))
                    
                      


                }

            </tbody>
        </table>
    );
}

export default ListUsers;