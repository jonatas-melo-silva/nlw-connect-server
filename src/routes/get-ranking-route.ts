import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSubscriberRankingPosition } from '../functions/get-subscriber-ranking-position'
import { getRanking } from '../functions/get-ranking'

export const getRankingRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/ranking',
      {
        schema: {
          summary: 'Get ranking',
          tags: ['Referral'],
          consumes: ['application/json'],
          response: {
            200: z.object({
              ranking: z.array(z.object({
                id: z.string(),
                name: z.string(),
                score: z.number()
              }))
            })
          }
        }
      }, async (request) => {

        const { rankingWithScore } = await getRanking()

        return { ranking: rankingWithScore }
      })
  }
