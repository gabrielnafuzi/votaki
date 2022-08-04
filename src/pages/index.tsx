import { tw } from 'twind'

import { trpc } from '@/utils/trpc'

const HomePage = () => {
  const hello = trpc.useQuery(['example.getAll'])

  return (
    <div
      className={tw`pt-6 text-2xl text-blue-500 flex justify-center items-center w-full`}
    >
      {hello.data ? <p>{hello.data[0]?.question}</p> : <p>Loading..</p>}
    </div>
  )
}

export default HomePage
