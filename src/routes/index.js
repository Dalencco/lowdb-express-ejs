const express = require('express');
const router = express.Router();

const { getTasks, createTask, getTask, updateTask, renderEditTask, deleteTask } = require('../controllers/tasks.controllers')

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.get('/tasks/edit/:id', renderEditTask)
router.post('/tasks/edit/:id', updateTask);
router.get('/tasks/delete/:id', deleteTask);

module.exports = router;