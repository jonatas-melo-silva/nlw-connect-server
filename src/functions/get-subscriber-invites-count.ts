import { redis } from '../redis/client'

type GetSubscriberInviteCountParams = {
  subscriberId: string
}

export async function getSubscriberInviteCount({
  subscriberId,
}: GetSubscriberInviteCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return {
    count: Number.parseInt(count ?? '0', 10),
    // count: count ? Number.parseInt(count, 10) : 0,
  }
}
