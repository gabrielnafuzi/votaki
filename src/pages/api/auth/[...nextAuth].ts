import NextAuth, { type NextAuthOptions } from 'next-auth'

import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '@/server/db/client'

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }

      return session
    },
  },

  adapter: PrismaAdapter(prisma),

  providers: [],
}

export default NextAuth(authOptions)
