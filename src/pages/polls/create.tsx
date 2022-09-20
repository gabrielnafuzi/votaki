import { useState } from 'react'

import type { NextPage } from 'next'

import { tw } from 'twind'

import type {
  CreatePollOptionSchema,
  CreatePollQuestionSchema,
} from '@/common/validation/create-poll-question'
import { Button } from '@/components/button'
import { Spinner } from '@/components/spinner'
import { uploadFileToStorage } from '@/utils/firebase'
import { trpc } from '@/utils/trpc'

const mockOptions = [
  {
    color: '#000000',
    text: 'Option 1',
  },
  {
    color: '#fff',
    text: 'Option 2',
  },
  {
    color: '#ccc',
    text: 'Option 3',
  },
]

const data: CreatePollQuestionSchema = {
  allowComments: true,
  allowMultipleVotes: true,
  categoryId: 'cl7yb0c750004qhty95avzqw6',
  enableCaptcha: true,
  hideShare: true,
  isToSaveAsDraft: true,
  loginToVote: true,
  question: 'Question 1',
  visibility: 'PRIVATE',
  options: [],
  endsAt: new Date().toISOString(),
}

type CreatePollOptionWithFile = Omit<CreatePollOptionSchema, 'image'> & {
  image: File
}

const getOptionWithImageUrl = async (option: CreatePollOptionWithFile) => {
  const url = await uploadFileToStorage(option.image, 'POLL_QUESTION_OPTIONS')

  return { ...option, image: url }
}

const CreatePollPage: NextPage = () => {
  const [images, setImages] = useState<Array<File | null>>([])

  const { mutateAsync, isLoading, error } = trpc.useMutation(
    'pollQuestion.create'
  )

  const handleCreate = async () => {
    const options = mockOptions.map((option, index) => ({
      ...option,
      image: images[index] as File,
    }))

    const optionsWithImage = await Promise.all(
      options.map(getOptionWithImageUrl)
    )

    await mutateAsync({ ...data, options: optionsWithImage })
  }

  if (isLoading) return <Spinner />

  if (error) {
    return (
      <p>
        <code>{JSON.stringify(error, null, 2)}</code>
      </p>
    )
  }

  return (
    <div
      className={tw`flex flex-col gap-2  h-screen w-full items-center justify-center`}
    >
      <Button onClick={handleCreate} disabled={images.length === 0}>
        Create a poll
      </Button>

      <input
        type="file"
        multiple
        onChange={(e) => setImages([...(e.target?.files ?? [])])}
      />
    </div>
  )
}

export default CreatePollPage
