import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_REST_HOST: z.string().url(),
    NEXT_PUBLIC_SOCKET_HOST: z.string().url(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  //   runtimeEnv: {},

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_REST_HOST: process.env.NEXT_PUBLIC_REST_HOST,
    NEXT_PUBLIC_SOCKET_HOST: process.env.NEXT_PUBLIC_SOCKET_HOST,
  },
})
