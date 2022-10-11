import type { App } from 'vue'
import {
  positionStickyFunc,
  fullName,
} from '../components/composableFunctions/customDirectives.vue'
import ErrorMessage from '../components/sfcs/GlobalComponent.vue'

export const registerInApp = (app: App) => {
  app.directive('positionSticky', positionStickyFunc)
  app.directive('fullName', fullName)
  app.component('ErrorMessage', ErrorMessage)
  app.provide('globalMessage', 'this is global message via injector')
}
