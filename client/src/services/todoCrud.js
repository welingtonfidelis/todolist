import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getList = async (done) => {
  try {
    const { data } = await api.get("todos?status="+done);

    return { ok: true, data };
  } catch (error) {
    console.log("SHOW TODO ERROR", error);

    return { ok: false };
  }
};

export const showTodo = async (id) => {
  try {
    const { data } = await api.get(`/todos/${id}`);

    return { ok: true, data };
  } catch (error) {
    console.log("SHOW TODO ERROR", error);

    return { ok: false };
  }
};

export const addTodo = async (todo) => {
  try {
    const { data } = await api.post("/todos", todo);

    return { ok: true, data };
  } catch (error) {
    console.log("SAVE NEW TODO ERROR", error);

    return { ok: false };
  }
};

export const removeTodo = async (id) => {
  try {
    const { data } = await api.delete(`/todos/${id}`);

    return { ok: true, data };
  } catch (error) {
    console.log("SAVE NEW TODO ERROR", error);

    return { ok: false };
  }
};

export const updateTodo = async (todo) => {
  try {
    const { data } = await api.put(`/todos/${todo.id}`, todo);

    return { ok: true, data };
  } catch (error) {
    console.log("UPDATE TODO ERROR", error);

    return { ok: false };
  }
};

export const updateDone = async (id, done) => {
  try {
    const { data } = await api.patch(`/todos/status/${id}`, {done});

    return { ok: true, data };
  } catch (error) {
    console.log("UPDATE DONE ERROR", error);

    return { ok: false };
  }
};