import { redis } from '../redis/client'

type GetSubscriberInviteClicksParams = {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return {
    count: Number.parseInt(count ?? '0', 10),
    // count: count ? Number.parseInt(count, 10) : 0,
  }
}

