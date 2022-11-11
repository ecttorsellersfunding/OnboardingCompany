<script setup lang="ts">
import { useQueryProvider } from 'vue-query'

import { useSPA } from '~/hooks'

import { isServicesLoadedKey } from '~/types'

const { isLocal } = useSPA()

const isServicesLoaded = isLocal.value ? inject(isServicesLoadedKey) : true

useQueryProvider()
</script>

<template>
  <router-view v-slot="{ Component: component }">
    <SFTransition transition="appear">
      <div v-if="isServicesLoaded" :key="String(component)">
        <component :is="component" />
      </div>
      <SFLoader v-else :modal="false" />
    </SFTransition>
  </router-view>

  <SFPlugins v-if="isLocal" />
</template>
