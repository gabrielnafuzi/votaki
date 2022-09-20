import { createPollQuestionSchema } from '@/common/validation/create-poll-question'

import { createRouter } from '../create-router'

export const pollQuestionRouter = createRouter().mutation('create', {
  input: createPollQuestionSchema,
  resolve: async ({ ctx, input }) => {
    const {
      allowComments,
      allowMultipleVotes,
      categoryId,
      enableCaptcha,
      hideShare,
      isToSaveAsDraft,
      loginToVote,
      options,
      question,
      visibility,
      endsAt,
    } = input

    const result = await ctx.prisma.pollQuestion.create({
      data: {
        allowComments,
        allowMultipleVotes,
        categoryId,
        enableCaptcha,
        hideShare,
        loginToVote,
        options: {
          createMany: {
            data: options,
            skipDuplicates: true,
          },
        },
        question,
        visibility,
        endsAt,
        status: isToSaveAsDraft ? 'DRAFT' : 'PUBLISHED',
        userId: ctx.session?.user?.id,
      },
    })

    return {
      status: 201,
      message: 'Poll question created successfully',
      result,
    }
  },
})
