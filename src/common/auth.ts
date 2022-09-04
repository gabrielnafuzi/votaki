import { type NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { verify } from 'argon2'

import { signInSchema } from '@/common/validation/auth'
import { env } from '@/env/server.mjs'
import { prisma } from '@/server/db/client'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const creds = await signInSchema.parseAsync(credentials)

        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        })

        if (!user) {
          return null
        }

        const isValidPassword = await verify(user.password, creds.password)

        if (!isValidPassword) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session
    },
  },

  jwt: {
    secret: env.JWT_SECRET,
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },

  pages: {
    signIn: '/sign-in',
    newUser: '/sign-up',
  },
}
