import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserList } from "../../model/Users";

const Users = (): JSX.Element => {
    const [users, setUsers] = useState<UserList[]>([]);

    const getUsers = async () => {
        const response = await axios.get<UserList[]>('https://jsonplaceholder.typicode.com/users');
        const userslist = response.data;
        setUsers(userslist);
    }

    console.log('users', users);

    useEffect(() => {
        getUsers();
    } , []);
    return (
        <>
            <h1>Users</h1>
            <hr />
            <ul className="list-group">
                {users && users.map(user => <li key={user.id} className="list-group-item">{user.name}</li>)}
            </ul>
        </>
    )
}

export default Users;