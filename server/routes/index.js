const { Router } = require('express');
const todoController = require('../controllers/todoController');

const router = Router();

router.get('/todos', todoController.list);

router.get('/todos/:id', todoController.show);

router.post('/todos', todoController.create);

router.put('/todos/:id', todoController.update);

router.patch('/todos/status/:id', todoController.updateStatus);

router.delete('/todos/:id', todoController.delete);

module.exports = router;