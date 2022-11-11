export const changeRoute = (to: string): void => {
  if (to.startsWith('/')) {
    window.location.href = `${window.location.origin}${to}`
    return
  }
  window.location.href = `${window.location.origin}/${to}`
}
