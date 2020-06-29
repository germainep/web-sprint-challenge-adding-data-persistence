const db = require('../data/config')

function findProjects() {
  const projects = db('projects')
  return projects
}

function findProjectById(id) {
  const project = db('projects as p')
    .where('p.id', id)
    .join('tasks as t', 'p.id', 't.projectId')
  return project
}

function createProject(project) {
  const newProject = db('projects').insert(project, 'projectName')
  return newProject
}

module.exports = {
  findProjects: findProjects,
  createProject: createProject,
  findProjectById: findProjectById,
}
