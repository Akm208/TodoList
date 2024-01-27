// src/components/App.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
