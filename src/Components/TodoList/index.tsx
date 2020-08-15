import React, { useState, FormEvent } from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TodoList = () => {
  const [id, setId] = useState(Number(0));
  const [title, setTitle] = useState("");
  const [createdOn, setCreatedOn] = useState(dataAtualFormatada());
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [done, setDone] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Tarefa exemplo",
      createdOn: dataAtualFormatada(),
      description: "Aqui fica a descrição da tarefa",
      author: "Nome do responsável pela tarefa",
      done: false,
    },
  ]);

  const [isActive, setIsActive] = useState(false);
  const handleClose = () => {
    setIsActive(false);
  };
  const handleShow = () => {
    setIsActive(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  function clearInputs() {
    setId(0);
    setTitle("");
    setAuthor("");
    setDescription("");
  }

  function saveTodo() {
    setTodos([
      ...todos,
      {
        id: 0,
        title: title,
        createdOn: dataAtualFormatada(),
        description: description,
        author: author,
        done: false,
      },
    ]);
    setIsActive(!isActive);
    clearInputs();
  }

  function deleteTodo(index: Number) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    handleCloseModal();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button className="btn btn-outline-info mt-3" onClick={handleShow}>
        + Nova tarefa
      </button>
      {todos.length > 0 &&
        todos.map((todo) => (
          <Card
            key={todo.id}
            className="shadow mb-2 p-3 mt-2"
            style={{
              width: "30rem",
            }}
          >
            <Card.Title>{todo.title}</Card.Title>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                font: "400 1.2rem Poppins",
              }}
            >
              {todo.description}
            </Card.Body>
            <Card.Footer>
              {"Criado em: " + todo.createdOn} |{" "}
              <Button variant="danger" onClick={handleShowModal}>
                Deletar
              </Button>
            </Card.Footer>
          </Card>
        ))}

      <Modal show={isActive} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nova tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Identificação</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              value={id}
              onChange={(e) => {
                setId(parseInt(e.target.value));
              }}
              required
            />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Autor"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} className="mr-2">
            Cancelar
          </Button>
          <Button variant="success" onClick={saveTodo}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar tarefa?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="info" className="mr-2">
            Não
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            Sim
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoList;
