import TodoItemComponent from "../todoItem";

import Skeleton from '@mui/material/Skeleton';
import "./style.css";

export default function TodoListComponent({ loading, todoList, handleRemoveToDo, handleChangeStatus, currentTab }) {
  return (
    <>
      <ul className="todo-list-component-content">
        {
          loading ?
          <>
            {
              new Array(7).fill(undefined).map(item => (
                <Skeleton variant="rectangular" animation="wave" width={822} height={58}>
                  <div className="todo-list-loading" />
                </Skeleton>
              ))
            }
          </>
        :
          todoList &&
          todoList.map((item, index) => {
            return (
              <TodoItemComponent
                todoItem={item}
                handleRemoveToDo={() => handleRemoveToDo(item.id, currentTab)}
                handleChangeStatus={() => handleChangeStatus(item.id, !item.done, currentTab)}
                key={index}
              />
            );
          })}
      </ul>
    </>
  );
}
