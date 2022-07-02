import { tw } from 'twind'

type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={tw('text-2xl')}>{children}</button>
}
