<script setup lang="ts">

import { cardsService } from '~/services/index'

const { data: cardList, isFetching } = useQuery(
  'getCards',
  cardsService.getCards,
)
</script>

<route>
    name: Cards Page
    navlinks: true
</route>

<template>
  <SFCard w="full">
    <p text="h2" font="bold" mb="4">
      Cards page title
    </p>

    <SFLoader v-if="isFetching" data-testid="cards-page-loader" w="full" py="10" />
    <template v-else>
      <div data-testid="cards-table" display="hidden md:grid" mt="2" grid="~ cols-2" gap="x-2 y-2" align="items-center">
        <template v-for="card in cardList" :key="card.id">
          <ExampleCard v-bind="card" />
        </template>
      </div>

      <div data-testid="cards-carousel" display="md:hidden" my="2">
        <SFCarousel :items-list="cardList || []">
          <template #slide="{ slide }">
            <ExampleCard v-bind="slide" />
          </template>
        </SFCarousel>
      </div>
    </template>
  </SFCard>
</template>
