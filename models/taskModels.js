const db = require('../data/config')

function findTaskById(id) {
  const task = db('tasks').where('id', id)
  return task
}

function findTasks() {
  const tasks = db('tasks as t')
    .join('projects as p', 'p.id', 't.projectId')
    .select(
      't.id as task',
      't.description as description',
      't.notes as notes',
      'p.projectName as Project',
      'p.projectDescription as Project Description'
    )
  return tasks
}

function createTask(task) {
  const newTask = db('tasks').insert(task)
  return newTask
}

module.exports = {
  createTask: createTask,
  findTaskById: findTaskById,
  findTasks: findTasks,
}
