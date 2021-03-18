import axios from 'axios';
import React, { useState, useEffect } from 'react';
import userImage from './assets/img/user.jpg';
import StatesChart from './chart/StatesChart';

const Clients = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
            .catch(err => {
                console.error("Error")
            })
    }, [])

    return (
        <div className="clients">
            <div className="usersList">
                <p className="usersTitle">Clients</p>
                <div className="users">
                    {users.map(user => (
                        <div className="head">
                            <img src={userImage} />
                            <div className="names">
                                <h4>{user.name}</h4>
                                <p>No description</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="states">
                <p className="title">Top States</p>
                <StatesChart />
            </div>
        </div>
    );
};

export default Clients;