const express = require('express')
const tasks = require('../models/taskModels')

const router = express.Router({ mergeParams: true })

router.get('/', async ( req, res, next ) => {
  try {
    const task = await tasks.findTasks()
    res.json(task)
  } catch (err) {
    next(err)
  }
})

router.post('/', async ( req, res, next ) => {
  try {
    req.body.projectId = req.params.projectId
    const [ newTask ] = await tasks.createTask(req.body)
    const task = await tasks.findTaskById(newTask)
    res.json(task)
  } catch (err) {
    next(err)
  }
})

module.exports = router
