// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </div>
          <Button color="danger" onClick={() => handleDelete(todo.id)}>
            Delete
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
