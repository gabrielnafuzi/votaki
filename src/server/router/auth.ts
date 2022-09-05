import * as trpc from '@trpc/server'
import { hash } from 'argon2'

import { signUpSchema } from '@/common/validation/auth'

import { createRouter } from './context'

export const authRouter = createRouter().mutation('sign-up', {
  input: signUpSchema,
  resolve: async ({ ctx, input }) => {
    const { email, username, password, firstName, lastName } = input

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    })

    if (exists) {
      throw new trpc.TRPCError({
        code: 'CONFLICT',
        message: 'This email address is already being used.',
      })
    }

    const existsUsername = await ctx.prisma.user.findFirst({
      where: { username },
    })

    if (existsUsername) {
      throw new trpc.TRPCError({
        code: 'CONFLICT',
        message: 'This username is already being used.',
      })
    }

    const hashedPassword = await hash(password)

    const result = await ctx.prisma.user.create({
      data: { username, email, password: hashedPassword, firstName, lastName },
    })

    return {
      status: 201,
      message: 'Account created successfully',
      result: result.email,
    }
  },
})
