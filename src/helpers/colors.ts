export const getComputedColors = (colors: string | string[]) => {
  if (typeof colors === 'string') {
    const color = getComputedStyle(document.documentElement, ':root').getPropertyValue(`--color-${colors}`)
    return color || ''
  }
  const computedColors = colors.map((color) => {
    const computedColor = getComputedStyle(document.documentElement, ':root').getPropertyValue(`--color-${color}`)
    return computedColor || ''
  })

  return computedColors
}
