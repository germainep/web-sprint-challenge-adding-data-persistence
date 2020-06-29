const express = require('express')
const projects = require('../models/projectsModles')
const taskRouter = require('../router/taskRouter')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
  try {
    const projectList = await projects.findProjects()
    res.json(projectList)
  } catch (err) {
    next(err)
  }
})
router.get('/:projectId', async ( req, res, next ) => {
  try {
    const project = await projects.findProjectById(req.params.projectId)
    res.json(project)
  } catch (err) {
    next(err)
  }
})
router.post('/', async ( req, res, next ) => {
  try {
    const [ newProject ] = await projects.createProject(req.body)
    const project = await projects.findProjectById(newProject)
    res.json(project)
  } catch (err) {
    next(err)
  }
})

router.use('/:projectId/tasks', taskRouter)

module.exports = router
