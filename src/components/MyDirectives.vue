<script setup lang="ts">
import { ref } from 'vue'
import type { VNode, DirectiveBinding } from 'vue'
const isShowList = ref<boolean>(false)

const listLanguages = [
  {
    name: 'Python',
    share: 29,
  },
  {
    name: 'Java',
    share: 17,
  },
  {
    name: 'Javascript',
    share: 54,
  },
]

const vAutoScrollToElement = {
  mounted: (el: HTMLElement, { value }: { value: boolean }, vnode: VNode) => {
    if (value) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    // eslint-disable-next-line no-console
    console.log(vnode)
  },
};

const vChangeTextColor = {
  mounted: (el: HTMLElement, bindings: DirectiveBinding) => {
    el.style.color= bindings.value;
  }
};
</script>

<template>
  <div v-autoScrollToElement="true" v-changeTextColor="'red'">Build-in Directives</div>
  <input id="checkbox" v-model="isShowList" type="checkbox" />
  <label v-changeTextColor="'green'" for="checkbox" >Show List</label>
  <ul v-if="isShowList">
    <li v-for="(item, index) in listLanguages" :key="index">
      {{ item.name }} - {{ item.share }}%
    </li>
  </ul>

  <div>Custom Directives</div>
</template>
