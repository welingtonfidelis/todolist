import {  FaAngellist, FaRegHandRock, FaRegThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import br from "date-fns/locale/pt-BR"

import "./style.css";

export default function TodoItemComponent({ todoItem, handleRemoveToDo, handleChangeStatus }) {
  return (
    <li className="todo-item-component-content">
      <Link to={`/details/${todoItem.id}`} params={{todoItem}}>
        {todoItem.title}
      </Link>
      <span className="todo-item-component-date">{format(new Date(todoItem.createdAt), "d-MM-yyyy", { locale: br })}</span>
      <div>
        <FaRegThumbsDown  onClick={handleRemoveToDo} title="Remover tarefa" color="red" />
        {
          todoItem.done ?
          <FaAngellist onClick={handleChangeStatus} title="Desfazer tarefa" color="green" />
          :
          <FaRegHandRock onClick={handleChangeStatus} title="Atualizar status" color="#1976d2" />
        }
      </div>
    </li>
  );
}
