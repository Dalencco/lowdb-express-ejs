const { getConnection } = require('../database')
const { v4 } = require('uuid');

const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.render('home', { tasks })
}

const getTask = (req, res) => {
    const task = getConnection().get('tasks').find({ id: req.params.id }).value();
    res.render('task', { task })
}

const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        id: v4(),
        name,
        description
    }

    getConnection().get('tasks').push(newTask).write();
    res.redirect('/tasks')
}

const updateTask = async (req, res) => {
    const updateTask = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description
    }
    const result = await getConnection().get('tasks').find({ id: req.params.id })
        .assign(updateTask)
        .write();
    res.redirect('/tasks')
}

const renderEditTask = (req, res) => {
    const Task = getConnection().get('tasks').find({ id: req.params.id }).value();
    res.render('edit', { Task })
}

const deleteTask = (req, res) => {
    getConnection().get('tasks').remove({ id: req.params.id }).write();
    res.redirect('/tasks')
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    renderEditTask,
    deleteTask
}