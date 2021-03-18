import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';

const ClientsTab = () => {

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
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table hover bordered>
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ClientsTab;