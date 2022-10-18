import type { App } from 'vue'
import {
  positionStickyFunc,
  fullName,
} from '@/directives/customDirectives.vue'
import GlobalHeaderComponent from '@/components/GlobalHeaderComponent.vue'
import useGlobalState from '@/composableFunctions/useGlobalState'

const { state } = useGlobalState()

export const registerInApp = (app: App) => {
  app.directive('positionSticky', positionStickyFunc)
  app.directive('fullName', fullName)
  app.component('GlobalHeader', GlobalHeaderComponent)
  app.provide('globalMessage', 'this is global message via injector')
  app.provide('globalState', { state })
}
