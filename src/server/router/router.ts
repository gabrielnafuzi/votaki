import superjson from 'superjson'

import { authRouter } from './auth'
import { createRouter } from './context'
import { userRouter } from './user'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('auth.', authRouter)
  .merge('user.', userRouter)

export type AppRouter = typeof appRouter
