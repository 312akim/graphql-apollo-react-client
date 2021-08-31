import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';


function GetUsers(props) {
    const {error, loading, data} = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(data.getAllUsers);
            setUsers(data.getAllUsers);
        }
    }, [data]);

    return (
        <div>
            {
                users.map((user) => {
                    return <h1>{user.first_name}</h1>
                })
            }
        </div>
    );
}

export default GetUsers;