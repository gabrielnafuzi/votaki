// Wrapper for unstable_getServerSession https://next-auth.js.org/configuration/nextjs

import type { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { nextAuthOptions } from '@/common/auth'

type Context = {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}

export const getServerAuthSession = (ctx: Context) => {
  return unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions)
}
