import { Session } from 'next-auth'

import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

import { getServerAuthSession } from '@/common/get-server-auth-session'

import { prisma } from '../db/client'

type CreateContextOptions = {
  session: Session | null
}

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  }
}

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const { req, res } = opts

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res })

  return {
    req,
    res,
    session,
    prisma,
  }
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
