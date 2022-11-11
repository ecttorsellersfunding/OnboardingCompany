import { useQuery as useVueQuery } from 'vue-query'
import type { UseQueryReturnType } from 'vue-query/lib/vue/useBaseQuery'
import type { QueryFunction, QueryKey, UseQueryOptions } from 'vue-query/types'

export const useQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
>(
  key: QueryKey,
  func: QueryFunction<TQueryFnData>,
  config?: UseQueryOptions<TQueryFnData, TError, TData>,
): UseQueryReturnType<TData, TError> => {
  const query = useVueQuery(key, func, {
    retry: 0,
    refetchOnWindowFocus: false,
    ...config,
  })

  return { ...query }
}
