import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';
import { useInView } from 'react-intersection-observer';


function GetUsers(props) {
    const {error, loading, data} = useQuery(LOAD_USERS, {
        pollInterval: 2000
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

    return (
        <div style={styles.container}>
            {
                users.map((user, i) => {
                    return <DisplayUser user={user} key={'user' + i}/>
                })
            }
        </div>
    );
}

const DisplayUser = ({user}) => {
    const {ref, inView} = useInView({
        threshold: 0
    });

    return (
        <div ref={ref} style={{padding: '5px', height: '35px'}}>
            {
                inView ? <h1>{user.first_name}</h1> : ''
            }
        </div>
    )
}

const styles = {
    container: {
        height: '500px',
        overflowY: 'scroll',
        border: '2px solid black',
    }
}

export default GetUsers;