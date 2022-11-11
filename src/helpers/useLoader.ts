import type { MaybeRef } from '@vueuse/core'
import { or } from '@vueuse/core'
import { isRef } from 'vue'
import { isCustomLoadingKey } from '~/types'

export function useLoader(externalLoader?: MaybeRef<boolean>) {
  const isLoading = ref(isRef(externalLoader) ? externalLoader.value : false)
  const isLoadingRef = or(isLoading, externalLoader)

  const isCustomLoading = inject(isCustomLoadingKey)

  watchEffect(() => {
    if (!isCustomLoading) return
    isCustomLoading.value = isLoadingRef.value
  })

  return {
    isLoading,
  }
}
