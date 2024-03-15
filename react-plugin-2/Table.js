import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function Table() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    const getUserDetails = async (userId) => {
        const endpoint = `https://jsonplaceholder.typicode.com/users/${userId}`;
            const result = await axios.get(endpoint);
            console.log(result)
            if (result.status === 200) {
                setUser(result.data);
            }
    }

    useEffect(() => {
        async function fetchData() {
            const endpoint = 'https://jsonplaceholder.typicode.com/users';
            const result = await axios.get(endpoint);
            console.log(result)
            if (result.status === 200) {
                setUsers(result.data);
            }
        }
        fetchData();
        getUserDetails(getElementId('thisIsSomeVoterVoiceUniqueClassName'));
    }, [])

    const getElementId = (className) => document.getElementsByClassName(className)[0].id

    return (
        <div>
            <h2>User Name</h2>
            {users && users.map(user => {
                return (
                    <li> {user.name} </li>
                )
            })}
            <div>
            </div>
            <div>
                Unique Id
            </div>
            <div> { getElementId('thisIsSomeVoterVoiceUniqueClassName') } </div>
            <div>User Name</div>
            <div> { !!user ? user.name : 'No User Found' } </div>
        </div>
    )
}
