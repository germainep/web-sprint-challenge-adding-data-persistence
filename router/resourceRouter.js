const express = require('express')
const resources = require('../models/resoureModel')

const router = express.Router({ mergeParams: true })

router.get('/', async ( req, res, next ) => {
  try {
    const data = await resources.findResources()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async ( req, res, next ) => {
  try {
    const [ data ] = await resources.createResource(req.body)
    const newResource = await resources.findResourceById(data)
    res.json(newResource)
  } catch (err) {
    next(err)
  }
})
module.exports = router
