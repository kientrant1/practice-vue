<script setup lang="ts">
import { ref, reactive, provide, readonly } from 'vue'

import HelloComponent from '@/components/HelloApp.component.vue'
import BlogPost from '@/components/BlogPost.component.vue'
import type { IBlogPost } from '@/components/BlogPost.component.vue'
import EmitVModel from '@/components/EmitVModel.component.vue'
import InjectionMessage from '@/components/InjectionMessage.component.vue'
import TemplateRef from '@/components/TemplateRef.component.vue'
import BuildInComponent from '@/components/BuildIn.component.vue'

const toogleComp = ref<boolean>(true)
const blogs = reactive<IBlogPost[]>([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

const vModelValue = ref<string>('')
const fontSize = ref<number>(1)

const enlargeTextHandle = (size?: number) => {
  fontSize.value = size || fontSize.value + 1
}

const injectionMessage = ref<string>()
const updateMessage = (message: string) => {
  injectionMessage.value = message
}
provide('injectionMessage', {
  message: readonly(injectionMessage),
  updateMessage,
})
</script>

<template>
  <div>
    <input v-model="toogleComp" type="checkbox" value="true" /> Show Hello
    Component
    <HelloComponent v-if="toogleComp" hello="Hello there, " :log="true" />
  </div>
  <h3>Emit event</h3>
  <div>
    <h3>Emit event with v-model: {{vModelValue}}</h3>
    <EmitVModel v-model="vModelValue" />

    <BlogPost
      :style="{ fontSize: `${fontSize}rem` }"
      :blogs="blogs"
      @enlarge-text="enlargeTextHandle"
    >
      <template #default="slotProps"
        ><span class="scoped-slot-header">{{
          slotProps.text
        }}</span></template
      >
      <template #header>My Blog post</template>
      <template #header-note> (Emit event, Multi slot)</template>
    </BlogPost>
    <BlogPost v-slot="slotProps">
      <h3 :class="'scoped-slot-header'">{{ slotProps.text }}</h3>
    </BlogPost>
  </div>

  <h3>Component communication</h3>
  <div>
    <h3>Injection Message</h3>
    Parent Input <input v-model="injectionMessage" type="text" />
    <InjectionMessage />
  </div>
  <div>
    <h3>Template Ref</h3>
    <TemplateRef />
  </div>
  <div>
    <BuildInComponent />
  </div>
</template>

<style scope>
.scoped-slot-header {
  color: green;
}
</style>
