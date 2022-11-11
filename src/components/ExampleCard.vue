<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  content?: string
  actionLabel?: string
  id?: number
}>(), {
  id: 1,
  title: 'Card title',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor, ante vel ultricies pulvinar, risus urna commodo quam, a cursus nulla nisi sit amet augue.',
  actionLabel: 'Card Action',
})

// eslint-disable-next-line no-alert
const action = () => alert(`Card ${props.id} action!!`)
</script>

<template>
  <SFCard :data-testid="'card-' + id">
    <div px="2" space="y-2">
      <p font="bold" text="h3">
        {{ title }}
      </p>
      <p>
        {{ content }}
      </p>
      <SFMaterialButton size="sm" @click="action()">
        {{ actionLabel }}
      </SFMaterialButton>
    </div>
  </SFCard>
</template>
