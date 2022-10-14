<script setup lang="ts">
import { ref, reactive, provide, readonly } from 'vue'

import HelloComponent from '@/components/sfcs/HelloComponent.vue'
import BlogPost from '@/components/sfcs/BlogPost.vue'
import type { IBlogPost } from '@/components/sfcs/BlogPost.vue'
import InjectionMessage from '@/components/sfcs/InjectionMessage.vue'
import TemplateRef from '@/components/sfcs/TemplateRef.vue'
import BuildInComponent from '@/components/sfcs/BuildInComponent.vue'

const toogleComp = ref<boolean>(true)
const blogs = reactive<IBlogPost[]>([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])
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
  <div>
    <BlogPost
      :style="{ fontSize: `${fontSize}rem` }"
      :blogs="blogs"
      @enlarge-text="enlargeTextHandle"
    >
      <template #default="slotProps"
        ><span :class="'scoped-slot-header'">{{
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
