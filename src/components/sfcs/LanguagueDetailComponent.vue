<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const id = computed(() => useRoute().params?.id)

const content = computed(() => 'this is content ' + id.value)

</script>

<template>
  <p>{{content}}</p>
</template>
