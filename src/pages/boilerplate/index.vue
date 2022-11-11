<route>
name: Boilerplate
navlinks: true
</route>

<script setup lang="ts">
import { managerInfoKey } from '~/types'

const manager = inject(managerInfoKey)
const loggedIn = ref(true)

const logout = () => {
  const token = useStorage('@seller-token', '')
  token.value = ''
  window.location.reload()
}
</script>

<template>
  <div>
    <SFTransition right="5" bottom="5" position="absolute">
      <SFAlert
        v-if="loggedIn"
        variant="success"
        title="Logged in successful"
        description="Please feel free to edit pages/boilerplate/index.vue"
        bg="!neutral-white"
        class="animate-bounce-in"
        @mouseenter="loggedIn = false"
      />
    </SFTransition>
    <SFCard mt="10">
      <h1 font="bold" text="primary center h1">
        Welcome, {{ manager?.name }}!
      </h1>
      <p text="center" mb="2">
        This is a boilerplate with Vue 3 script setup + Vite, please feel free
        to edit and give us your feedback
      </p>
      <p text="center" display="md:hidden" data-testid="mobileOnlyLabel">
        This label is only displayed on mobile devices!!
      </p>
      <p text="center" display="hidden md:block" data-testid="pcOnlyLabel">
        This label is only displayed in larger screen devices!!
      </p>
      <div display="flex" justify="around" mt="10">
        <router-link :to="{ name: 'Cards Page' }">
          <SFMaterialButton size="sm">
            Cards Page
          </SFMaterialButton>
        </router-link>
        <router-link :to="{ name: 'Form Page' }">
          <SFMaterialButton size="sm">
            Form Page
          </SFMaterialButton>
        </router-link>
        <SFMaterialButton size="sm" @click="logout">
          Logout
        </SFMaterialButton>
      </div>
    </SFCard>
  </div>
</template>
