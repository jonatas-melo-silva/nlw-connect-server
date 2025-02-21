import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string().url(),
  API_URL: z.string().url(),
  WEB_URL: z.string().url(),
})

export type Env = z.infer<typeof envSchema>
export const env = envSchema.parse(process.env)
