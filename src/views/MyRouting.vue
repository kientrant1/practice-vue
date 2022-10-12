<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { listLanguages } from '@/mocks/listLanguagues'

</script>

<template>
  <ul>
    <li v-for="item in listLanguages" :key="item.id">
      <RouterLink :to="{ name: 'Languague', params: { id: item.id } }">{{
        item.name
      }}</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>
