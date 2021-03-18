import React from 'react';
import Navbar from '../Navbar';
import ClientTab from './ClientTab';

const Client = () => {
    return (
        <div>
            <Navbar />
            <h1 className="clientTitle">Clients</h1>
            <ClientTab />
        </div>
    );
}

export default Client;