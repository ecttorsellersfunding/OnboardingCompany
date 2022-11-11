export const removeEmptyKeysFromObject = (
  obj: Record<string, unknown>,
): Record<string, unknown> =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (value === undefined || value === null || value === '') return acc

    return {
      ...acc,
      [key]: value,
    }
  }, {})
