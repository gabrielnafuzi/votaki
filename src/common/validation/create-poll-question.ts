import * as z from 'zod'

const createPollOptionSchema = z.object({
  text: z.string(),
  color: z.string(),
  image: z.string(),
})

const pollVisibilitySchema = z.enum(['PUBLIC', 'PRIVATE'])

export const createPollQuestionSchema = z.object({
  question: z.string(),
  options: z.array(createPollOptionSchema),
  visibility: pollVisibilitySchema,
  isToSaveAsDraft: z.boolean(),
  categoryId: z.string(),
  allowMultipleVotes: z.boolean(),
  loginToVote: z.boolean(),
  allowComments: z.boolean(),
  enableCaptcha: z.boolean(),
  hideShare: z.boolean(),
  endsAt: z.string(),
})

export type CreatePollQuestionSchema = z.infer<typeof createPollQuestionSchema>
export type CreatePollOptionSchema = z.infer<typeof createPollOptionSchema>
export type PollVisibilitySchema = z.infer<typeof pollVisibilitySchema>
