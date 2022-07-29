import { unstable_getServerSession as getServerSession } from 'next-auth'

import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

import { authOptions as nextAuthOptions } from '@/pages/api/auth/[...nextAuth]'
import { prisma } from '@/server/db/client'

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const { req, res } = opts ?? {}

  const session =
    req && res && (await getServerSession(req, res, nextAuthOptions))

  return {
    req,
    res,
    session,
    prisma,
  }
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
