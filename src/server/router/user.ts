import { createProtectedRouter } from './protected-router'

export const userRouter = createProtectedRouter().query('me', {
  async resolve({ ctx }) {
    return ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
    })
  },
})
