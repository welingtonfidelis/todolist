const Todo = require("../models/Todo");

const todoController = {
  async list(req, res) {
    const where = {};

    if ([0,1].includes(+req.query.status)) {
      where.done = +req.query.status;
    }

    const todos = await Todo.findAll({ where });

    res.send(todos);
  },

  async show(req, res) {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id: id } });

    res.send(todo);
  },

  async create(req, res) {
    const data = await Todo.create(req.body);

    res.json(data);
  },

  async update(req, res) {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id } });

    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.done = req.body.done;

    const data = await todo.save();

    res.json(data);
  },

  async updateStatus(req, res) {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id } });

    todo.done = req.body.done;

    await todo.save();

    res.send('Tarefa atualizada com sucesso');
  },

  async delete(req, res) {
    const { id } = req.params;
    await Todo.destroy({ where: { id } });

    res.send('Tarefa deletada com sucesso');
  }
}

module.exports = todoController;