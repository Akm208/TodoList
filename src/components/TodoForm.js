// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="todoText">New Todo:</Label>
        <Input
          type="text"
          id="todoText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your todo"
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoForm;
