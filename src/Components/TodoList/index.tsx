import React, { useState } from "react";

import Card from "react-bootstrap/esm/Card";

const TodoList = () => {
  const [todos, setTodos] = useState([{ text: "Abc" }]);

  function addNewTodo() {
    setTodos([...todos, { text: "Abcdário" }]);
  }

  return (
    <div>
      {todos.map((todo) => (
        <Card>
          <Card.Body>{todo.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
