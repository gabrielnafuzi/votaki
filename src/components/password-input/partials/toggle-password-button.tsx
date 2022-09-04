import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { tw } from 'twind'

type ToggleShowPasswordButtonProps = {
  showPassword: boolean
  toggleShowPassword: () => void
  inputName: string
}

export const ToggleShowPasswordButton = ({
  showPassword,
  toggleShowPassword,
  inputName,
}: ToggleShowPasswordButtonProps) => {
  return (
    <button
      type="button"
      onClick={toggleShowPassword}
      className={tw`p-1 text-gray-800 bg-gray-100 rounded-md focus:(outline-none ring-1 ring-primary)`}
      aria-controls={inputName}
      aria-expanded={showPassword}
    >
      {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
    </button>
  )
}
