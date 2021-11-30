import { useState } from "react";
import PrimaryButton from "../primaryButton";
import TextInputComponent from "../textInput";

import "./style.css";

export default function TodoCreateComponent({ handleAddToDo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [error, setError] = useState({
    title: null,
    description: null
  })

  const clearErrorField = (field) => {
    setError(prevState => { return {...prevState, [field]: null}})
  }

  const validateSubmit = () => {
    let shouldValidate = true
    if(todoTitle === "") {
      setError(prevState => { return {...prevState, title: "Por favor, adicione um título para a tarefa"}})
      shouldValidate = false
    }
    if(todoDescription === "") {
      setError(prevState => { return {...prevState, description: "Por favor, adicione uma descrição para a tarefa"}})
      shouldValidate = false
    }
    return shouldValidate
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validateSubmit()) {
      return
    }

    handleAddToDo(todoTitle, todoDescription);

    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-create-component-content">
      <TextInputComponent
        type="text"
        value={todoTitle}
        onChange={ event => setTodoTitle(event.target.value)}
        onFocus={() => clearErrorField("title")}
        label="Insira o título da sua tarefa"
        maxLength={140}
        error={error.title}
      />
      <TextInputComponent
        type="multiline"
        value={todoDescription}
        onChange={ event => setTodoDescription(event.target.value)}
        onFocus={() => clearErrorField("description")}
        label="Insira a descrição da sua tarefa"
        error={error.description}
      />
      <PrimaryButton type="submit"> Criar Tarefa </PrimaryButton>
    </form>
  );
}
