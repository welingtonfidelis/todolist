import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {  FaAngellist, FaRegHandRock } from "react-icons/fa";

import PrimaryButton from "../../components/primaryButton";
import TextInputComponent from "../../components/textInput";
import { showTodo, updateTodo } from "../../services/todoCrud";

import "./style.css";

function Details({ handleRemoveToDo, handleChangeStatus }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDone, setTodoDone] = useState("");
  const [error, setError] = useState({
    title: null,
    description: null,
    done: false
  });

  const params = useParams();
  const navigate = useNavigate();
  const id = +params.id;

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const { ok, data } = await showTodo(id);

    if (ok) {
      setTodoTitle(data.title);
      setTodoDescription(data.description);
      setTodoDone(data.done)
    }
  }

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

  const handleStatus = () => {
    setTodoDone(!todoDone)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!validateSubmit()) {
      return
    }

    const { ok } = await updateTodo({
      id: id,
      title: todoTitle,
      description: todoDescription,
      done: todoDone,
    });

    if (ok) {
      navigate("/");
    }
  };

  return (
    <div className="details-content">
      <PrimaryButton variant="outlined" onClick={() => navigate("/")}>Voltar</PrimaryButton>

      <form onSubmit={handleSubmit} className="input-content">
        <TextInputComponent
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          label="Insira o título da sua tarefa"
          onFocus={() => clearErrorField("title")}
          error={error.title}
        />
        <TextInputComponent
          type="multiline"
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          label="Insira a descrição da sua tarefa"
          onFocus={() => clearErrorField("description")}
          error={error.description}
        />
        <div className="button-content">
          <PrimaryButton style={{ backgroundColor: todoDone? "green" : "#1976d2"}} onClick={() => handleStatus()}>
            {
              todoDone ?
              <>
                <FaAngellist color="white" />
                Desfazer tarefa
              </>
              :
              <>
                <FaRegHandRock color="white" />
                Concluir tarefa
              </>
            }
            
          </PrimaryButton>
          <PrimaryButton style={{ backgroundColor: "red" }} onClick={() => handleRemoveToDo(id, 0, navigate("/"))}> Deletar  </PrimaryButton>
          <PrimaryButton type="submit"> Salvar </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default Details;
