import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/navbar";
import Home from "./pages/home";
import Details from "./pages/details";
import { Routes, Route } from "react-router-dom";

import { getList, addTodo, removeTodo, updateDone } from "./services/todoCrud"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodoList = async (done = 0) => {
    setLoading(true) 
    setTimeout(async () => {
      const { ok, data } = await getList(done);
      if(ok) {
        setTodoList(data);
      }
      setLoading(false)
    }, 800)
  }

  const handleAddToDo = async (title, description) => {
    if (title && description) {
      const { ok, data } = await addTodo({ title, description, done: false });

      if (ok) {
        setTodoList([...todoList, data]);
      }
    }
  };

  const handleRemoveToDo = async (id, currentTab = 0, callback) => {
    const { ok } = await removeTodo(id);

    if (ok) {
      getTodoList(currentTab);
      
      if(callback) {
        callback();
      }
    }
  };

  const handleChangeStatus = async (id, done, currentTab = 0) => {
    const { ok } = await updateDone(id, done);
    
    if (ok) {
      getTodoList(currentTab);
    }
  }

  return (
    <div className="main-content">
      <header>
        <NavbarComponent />
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home loading={loading} todoList={todoList} getTodoList={getTodoList} handleAddToDo={handleAddToDo} handleRemoveToDo={handleRemoveToDo} handleChangeStatus={handleChangeStatus} />}/>
          <Route path="/details/:id" element={<Details handleRemoveToDo={handleRemoveToDo} handleChangeStatus={handleChangeStatus} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
