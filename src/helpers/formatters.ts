import { ROLES } from '~/constants/roles'

export const toCurrency = (value: number) => {
  const currency = useStorage('@seller-currency', 'USD')

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.value,
    maximumFractionDigits: 2,
  }).format(value)
}

export const toPercent = (
  value: number | string,
  options?: { invert?: boolean; trim?: boolean },
) => {
  const parsedValue = String(Number(parseFloat(String(value)).toFixed(2)))
  const computedValue = options?.invert
    ? `% ${parsedValue}`
    : `${parsedValue} %`

  return options?.trim ? computedValue.replace(' ', '') : computedValue
}

export const stringCapitalize = (str: string): string => {
  if (!str) return ''
  const splittedStrings = str.split(' ')
  const capitalizedStrings = splittedStrings.map(
    string => string.charAt(0).toUpperCase() + string.slice(1),
  )

  return capitalizedStrings.join(' ')
}

export const getUserRoleByClaims = (claims: string[]) => {
  if (!claims) return 'viewer'
  if (ROLES.SUPER_MANAGER.every(claim => !!claims.find(item => item === claim))) return 'super-manager'
  if (ROLES.MANAGER.every(claim => !!claims.find(item => item === claim))) return 'manager'
  return 'viewer'
}
