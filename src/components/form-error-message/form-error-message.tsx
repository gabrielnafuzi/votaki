import { tw } from 'twind'

type FormErrorMessageProps = {
  children: React.ReactNode
}

export const FormErrorMessage = ({ children }: FormErrorMessageProps) => {
  return <p className={tw`text-error text-sm mt-0.5`}>{children}</p>
}
