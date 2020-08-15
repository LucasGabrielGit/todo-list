import React from "react";
import Header from "./Components/Header";

import "./assets/global.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
