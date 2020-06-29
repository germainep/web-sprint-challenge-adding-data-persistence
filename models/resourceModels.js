const db = require('../data/config')

function findResourceById(id) {
  const resource = db('resources').where({ id: id })
  return resource
}

function findResources() {
  const resources = db('resources')
  return resources
}

function createResource(resource) {
  const newResource = db('resources').insert(resource)
  return newResource
}

module.exports = {
  findResourceById: findResourceById,
  findResources: findResources,
  createResource: createResource,
  createResource: createResource,
}
