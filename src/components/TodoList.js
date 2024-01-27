// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/actions'; // Import missing actions
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap'; // Import missing components

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo(id, editText));
    setEditingId(null);
    setEditText('');
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
            {editingId === todo.id ? (
              <Input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            )}
          </div>
          <div>
            {editingId === todo.id ? (
              <Button color="primary" onClick={() => handleSaveEdit(todo.id)}>
                Save
              </Button>
            ) : (
              <>
                <Button color="info" onClick={() => handleEdit(todo.id, todo.text)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </>
            )}
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
