import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscribeToEventsRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribe to events',
        tags: ['Subscriptions'],
        consumes: ['application/json'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      return reply.status(201).send({
        name,
        email,
      })
    }
  )
}
