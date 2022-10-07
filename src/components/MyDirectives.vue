<script setup lang="ts">
import { ref } from 'vue'
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

const vClicked = {
  mounted: (el: HTMLElement) => {
    el.classList.toggle('sdfsd')
  }
}
</script>

<template>
  <div>Build-in Directives</div>
  <input id="checkbox" v-model="isShowList" type="checkbox" />
  <label for="checkbox">Show List</label>
  <ul v-if="isShowList">
    <li v-for="(item, index) in listLanguages" :key="index" v-clicked>
      {{ item.name }} - {{ item.share }}%
    </li>
  </ul>

  <div>Custom Directives</div>

</template>
