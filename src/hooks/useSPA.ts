import { MFE } from '~/constants'

import type { LoaderReturn, SingleSpaContext, SingleSpaProps, UseUserReturn } from '~/types'

const singleSPA = ref<SingleSpaContext>()
const useLoader = ref<SingleSpaProps['useLoader']>()
const useUser = ref<SingleSpaProps['useUser']>()
const singleSPAProps = ref<Omit<SingleSpaProps, 'singleSpa' | 'useLoader' | 'useUser'>>()

const useSPA = () => {
  const loader = useLoader.value ? useLoader.value() : {} as LoaderReturn
  const user = useUser.value ? useUser.value() : {} as UseUserReturn
  const isLocal = computed(() => singleSPAProps.value?.portalName === MFE.NAME)

  return {
    singleSPA,
    useLoader,
    singleSPAProps,
    loader,
    isLocal,
    useUser,
    user,
  }
}

export default useSPA
