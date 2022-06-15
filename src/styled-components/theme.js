import breakpoints from "../breakpoints"
import colors from "../colors"

export const theme = {
  colors: {
    body: colors.darkGrey,
  },
  mediaQueries: {
    sm: `min-width: ${breakpoints.sm}px`,
    md: `min-width: ${breakpoints.md}px`,
    lg: `min-width: ${breakpoints.lg}px`,
    xl: `min-width: ${breakpoints.xl}px`,
    xxl: `min-width: ${breakpoints.xxl}px`,
  },
}
