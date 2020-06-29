const express = require('express')
const helmet = require('helmet')
const server = express()
const projectRouter = require('./router/projectRouter')
const resourceRouter = require('./router/resourceRouter')
const taskRouter = require('./router/taskRouter')

server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: 'something went wrong' })
})

server.listen(4000, () => {
  console.log('server listening on port 4000')
})
