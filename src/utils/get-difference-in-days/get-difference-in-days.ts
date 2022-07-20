const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24

type GetDifferenceInDaysProps = {
  from: Date
  to: Date
  locale?: string
}

export const getDifferenceInDays = ({
  from,
  to,
  locale = 'en',
}: GetDifferenceInDaysProps) => {
  const rtf = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  })

  const fromTime = from.getTime()
  const toTime = to.getTime()

  const diff = Math.floor((toTime - fromTime) / MILLISECONDS_IN_DAY)

  return rtf.format(diff, 'day')
}
