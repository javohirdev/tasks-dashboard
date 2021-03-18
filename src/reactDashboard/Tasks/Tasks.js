import React from 'react';
import Navbar from '../Navbar';
import TodoForm from '../Tasks/TodoForm';

const Users = () => {
    return (
        <div>
            <Navbar />
            <h1 className="tasksTitle">Tasks</h1>
            <TodoForm />
        </div>
    );
};

export default Users;