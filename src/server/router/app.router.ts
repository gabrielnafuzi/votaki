import superjson from 'superjson'

import { createRouter } from '../create-router'
import { authRouter } from './auth.router'
import { userRouter } from './user.router'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('auth.', authRouter)
  .merge('user.', userRouter)

export type AppRouter = typeof appRouter
