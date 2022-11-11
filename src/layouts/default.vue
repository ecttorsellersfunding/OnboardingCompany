<script setup lang="ts">
import { SFMenu } from 'sellers-funding-design-system-vite'

import { useSPA } from '~/hooks'

import { menuService } from '~/services'
import { managerInfoKey, partnerKey } from '~/types'

const { isLocal } = useSPA()

const router = useRouter()
const managerInfo = inject(managerInfoKey)
const partner = inject(partnerKey)

const { data: menuData, isFetching } = useQuery(
  'getMenu',
  () =>
    menuService.getMenu(
      managerInfo?.value?.companyId || '',
      partner?.value?.pageTitle !== 'SellersFunding',
    ),
  {
    retry: 0,
    enabled: isLocal.value,
  },
)
</script>

<template>
  <component
    :is="!isLocal ? 'div' : SFMenu"
    v-if="!isLocal || (!isFetching && menuData)"
    v-bind="menuData"
    :is-partner="partner?.pageTitle !== 'SellersFunding'"
    :class="!isLocal && 'w-full flex flex-col justify-center md:pl-68'"
  >
    <main min="h-[calc(100vh-72px)]" w="full" flex="~ col" bg="gray-200" p="4">
      <router-view v-slot="{ Component }" mx="auto" max-w="960px">
        <SFBreadcrumbV2
          v-if="router.currentRoute.value.meta.navlinks ?? true"
          mb="4"
          :router="router"
        />
        <component :is="Component" w="full" />
        <SFFooterV2
          v-if="partner?.pageTitle === 'SellersFunding'"
          my="10"
          mx="auto"
        />
        <span v-else text="neutral-black tinier center" font="semibold" my="10">
          Copyright {{ new Date().getFullYear() }} SellersFunding - © All rights
          reserved
        </span>
      </router-view>
    </main>
    <template #navbarPromo>
      <div />
    </template>
  </component>

  <SFLoader v-if="isFetching" bg-color="body" blur />
</template>
