import { Card } from '@material-ui/core';
import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const TodoForm = () => {

    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const [tododescription, setTododescription] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            description: tododescription,
            completed: false,
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
        setTododescription("")
    }

    function deleteTodo(id) {
        const updateTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updateTodos)
    }

    return (
        <>
            <form className="formSection" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    placeholder="Title" 
                    onChange={(e) => setTodo(e.target.value)} 
                    value={todo} 
                  />
                <input type="text" placeholder="Description" onChange={(e) => setTododescription(e.target.value)} value={tododescription} />
                <button type="submit">Add ToDo</button>
            </form>
            <Container>
                <Row>
                    {todos.map((todo, tododescription) =>
                        <Col md="4">
                            <Card key={todo.id}>
                                <h3>{todo.text}</h3>
                                <p>{todo.description}</p>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default TodoForm;