<script setup lang="ts">
export interface IBlogPost {
  id: number
  title: string
}

interface IProps {
  blogs?: IBlogPost[]
}

interface IEmits {
  (eventName: 'enlarge-text', size?: number): void;
}
// as type alias
// type IEmits = {
//   (eventName: 'enlarge-text', size?: number): void
// }

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
</script>

<template>
  <div class="blog-post">
    <h3><slot name="header" /><i><u><slot name="header-note" /></u></i></h3>
    <slot name="default" :text="'This is scoped slot text'">No blog post</slot>

    <h4 v-for="item in props.blogs" :key="item.id">{{ item.title }}</h4>
    <button v-if="blogs" @click="emit('enlarge-text')">Enlarge text</button>
    <button v-if="blogs" @click="emit('enlarge-text', 1)">Reset text</button>
  </div>
</template>
