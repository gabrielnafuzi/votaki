export const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ')

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
  }

  return firstName?.charAt(0) ?? ''
}
