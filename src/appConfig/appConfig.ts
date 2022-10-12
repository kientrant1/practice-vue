import type { App } from 'vue'
import {
  positionStickyFunc,
  fullName,
} from '../components/composableFunctions/customDirectives.vue'
import GlobalHeaderComponent from '../components/sfcs/GlobalHeaderComponent.vue'

export const registerInApp = (app: App) => {
  app.directive('positionSticky', positionStickyFunc)
  app.directive('fullName', fullName)
  app.component('GlobalHeader', GlobalHeaderComponent)
  app.provide('globalMessage', 'this is global message via injector')
}
