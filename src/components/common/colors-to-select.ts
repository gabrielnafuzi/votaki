import * as colors from 'twind/colors'

export const colorsToSelect = [
  colors.amber[300],
  colors.blue[500],
  colors.blueGray[400],
  colors.coolGray[800],
  colors.cyan[500],

  colors.emerald[500],
  colors.fuchsia[500],
  colors.teal[800],
  colors.green[500],
  colors.indigo[500],

  colors.lightBlue[500],
  colors.lime[300],
  colors.orange[500],
  colors.pink[500],
  colors.purple[600],

  colors.red[600],
  colors.rose[400],
  colors.sky[700],
  colors.teal[500],
  colors.trueGray[400],

  colors.violet[800],
  colors.warmGray[600],
  colors.yellow[500],
  colors.cyan[700],
  colors.indigo[800],

  colors.amber[800],
  colors.yellow[300],
  colors.teal[400],
  colors.fuchsia[900],
  colors.purple[300],
] as const

export type ColorToSelect = typeof colorsToSelect[number]
