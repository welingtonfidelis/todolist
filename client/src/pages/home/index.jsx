import { useEffect, useState } from "react";

import TodoCreateComponent from "../../components/todoCreate";
import TodoListComponent from "../../components/todoList";
import { addTodo, removeTodo } from "../../services/todoCrud";
import { makeStyles } from "@mui/material";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./style.css";

function Home({ loading, todoList, getTodoList, handleAddToDo, handleRemoveToDo, handleChangeStatus }) {

  const [tab, setTab] = useState(0);

  useEffect(() => {
    getTodoList(tab);
  }, [tab]);

  return (
    <div className="home-content">
      <TodoCreateComponent handleAddToDo={handleAddToDo} />
      <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)} centered>
        <Tab label="À Fazer" />
        <Tab label="Feitos" />
        <Tab label="Todos" />
      </Tabs>

      <TodoListComponent
        loading={loading}
        todoList={todoList}
        currentTab={tab}
        handleRemoveToDo={handleRemoveToDo}
        handleChangeStatus={handleChangeStatus}
      />
    </div>
  );
}

export default Home;
