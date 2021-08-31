import React, { useState } from 'react';
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

function Form(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            }
        })

        if (error) {
            console.log('error');
        }
    }

    return (
        <div style={styles.formContainer}>
            <input
                type='text'
                placeholder='First Name'
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <input
                type='text'
                placeholder='Last Name'
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <input
                type='text'
                placeholder='Email'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type='text'
                placeholder='Password'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={addUser}>
                Submit Form
            </button>
        </div>
    );
}

const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    }
}

export default Form;