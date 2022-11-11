import { whenever } from '@vueuse/core'
import type { UserModule } from '~/types'

export const install: UserModule = ({ partnerInfo }) => {
  const root = document.querySelector<HTMLElement>(':root')

  whenever(partnerInfo, () => {
    if (!root || !partnerInfo) return
    root.style.setProperty(
      '--color-primary',
      partnerInfo.value.primaryColor || '#394b74',
    )
    root.style.setProperty(
      '--color-secondary',
      partnerInfo.value.secondaryColor || '#e6b94c',
    )
  })
}
