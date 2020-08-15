import React from "react";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="page-header">
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.4rem",
          margin: 2
        }}
      >
        <Card.Body>Lista de tarefas</Card.Body>
      </Card>
    </header>
  );
};

export default Header;
