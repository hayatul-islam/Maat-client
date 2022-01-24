import React, { useEffect, useState } from 'react';

const useMaat = () => {

    // const apiLink = 'https://pure-refuge-33072.herokuapp.com'; 
    const apiLink = 'https://gentle-beyond-85199.herokuapp.com'; // mongoose
    // const apiLink = `http://localhost:4040`;

    const [users, setUsers] = useState();
    useEffect(() => {
        fetch(`${apiLink}/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    })


    return {
        apiLink,
        users
    }
};

export default useMaat;