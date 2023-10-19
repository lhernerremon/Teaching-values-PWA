<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h2>{{ counterStore.number }}</h2>
    <VBtn color="primary" variant="outlined" @click="() => counterStore.incrementNumber()">
      Increment
    </VBtn>
  </div>
</template>
