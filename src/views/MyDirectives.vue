<script setup lang="ts">
/* eslint-disable no-console */
import { ref } from 'vue'
import { vAutoScrollToElement, vChangeTextColor } from '../components/composableFunctions/customDirectives.vue'
import { listLanguages } from '@/mocks/listLanguagues'

const myName = { firstName: 'Kien', lastName: 'Tran'}
const isShowList = ref<boolean>(false)
const colorItem = ref<string>('green')

</script>

<template>
  <div v-changeTextColor="'red'" v-autoScrollToElement="true">Build-in Directives</div>
  <div>
    <input id="checkbox" v-model="isShowList" type="checkbox" />
    <label for="checkbox" >Show List</label>
  </div>
  <div>
    Choose color:
    <input id="colorItemGreen" v-model="colorItem" name="color" type="radio" value="green" />
    <label for="colorItemGreen">Green</label>
    <input id="colorItemBlue" v-model="colorItem" name="color" type="radio" value="blue" />
    <label for="colorItemBlue">Blue</label>
  </div>
  
  <ul v-if="isShowList">
    <!-- Can NOT apply dynamic value with custom directive in here??? -->
    <li v-for="(item, index) in listLanguages" :key="index">
      <span v-changeTextColor="colorItem">{{ item.name }} - {{ item.share }}%</span>
    </li>
  </ul>

  <div>My full name: <span v-fullName.bold="myName" /></div>
</template>
