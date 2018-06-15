'use strict'

const web = require('../../')
const { controller, route, cache, options, validate, pre, middleware } = web

@controller('/check')
class Check {
  @middleware()
  someMethod () {
    return 'test'
  }

  @route('get', '/in')
  @validate({ payload: true })
  checkIn (request, reply) {
    // intentionally empty
  }

  @route('get', '/out')
  @pre('someMethod')
  @options({ test: 'hello' })
  checkOut (request, reply) {

  }

  @route('get', '/')
  @cache({ privacy: 'public' })
  listAll (request, reply) {

  }
}
module.exports = Check
