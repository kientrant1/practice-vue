<script setup lang="ts">
import FormCp from '@/components/FormCp.component.vue'
import FormComposition from '@/components/FormComposition.component.vue'
import FormCustomFields from '@/components/FormCustomFields.component.vue'
import FormWizard from '@/components/FormWizard.component.vue'
</script>

<template>
  <GlobalHeader header="Form Component" />
  <FormCp />
  <GlobalHeader header="Form Composition" />
  <FormComposition />
  <GlobalHeader header="Form Custom Fields" />
  <FormCustomFields />
  <GlobalHeader header="Form Wizard" />
  <FormWizard />
</template>
