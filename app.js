const fastify = require('fastify')()

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`listening on ${fastify.server.address().port}`)
})
