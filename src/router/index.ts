import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import { log } from '@/utils/log'
import MyBindings from '../views/MyBindings.vue'
import MyComposableFunction from '../views/MyComposableFunction.vue'
import MyEvents from '../views/MyEvents.vue'
import MyReactiveState from '../views/MyReactiveState.vue'
import MyWatchers from '../views/MyWatchers.vue'
import MyDirectives from '../views/MyDirectives.vue'
import MySFCs from '../views/MySFCs.vue'
import MyRouting from '../views/MyRouting.vue'

import { useProductStore } from '../store/productStore'

// Lazy loading component
const ProductDetailComponent = () =>
  import('../components/sfcs/ProductDetailComponent.vue')

export const routes = [
  // no route is matched. Can replace with 404 page
  {
    path: '/:pathMatch(.*)',
    redirect: () => 'myBindings',
  },
  {
    path: '/myBindings',
    name: 'Data Bindings',
    component: MyBindings,
    // the same to 'redirect'
    alias: ['/'],
  },
  {
    path: '/myComposableFunction',
    name: 'Composable Function',
    component: MyComposableFunction,
    props: {
      msg: 'this is composable function!',
    },
  },
  {
    path: '/myEvents',
    name: 'Events',
    component: MyEvents,
  },
  {
    path: '/myReactiveState',
    name: 'Reactive State',
    component: MyReactiveState,
  },
  {
    path: '/myWatchers',
    name: 'Watchers',
    component: MyWatchers,
  },
  {
    path: '/myDirectives',
    name: 'Directives',
    component: MyDirectives,
  },
  {
    path: '/mySFCs',
    name: 'Single File Component',
    component: MySFCs,
  },
  {
    path: '/myRouting',
    name: 'Vue Router',
    component: MyRouting,
    children: [
      {
        path: 'product/:id',
        name: 'product',
        component: ProductDetailComponent,
        beforeEnter: (
          to: RouteLocationNormalized,
          from: RouteLocationNormalized,
          next: NavigationGuardNext
        ) => {
          log('Router:Config ------- 2. beforeEnter', to, from, next)
          // can fetch data and set to global state
          // Not apply to changes of params, hash, query
          // Need passing Pinia instance directly
          const { productState } = useProductStore()
          productState.product = {
            id: 1,
            title: '111',
            category: '',
            description: 'sdfsdf',
            image: 'sdfsd',
          }
          // Continue to go to active route
          next()
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    log('Router:Global ------- 1. beforeEach', to, from)
  }
)

router.beforeResolve(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    log('Router:Global ------- 3. beforeResolve', to, from)
  }
)

router.afterEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    log('Router:Global ------- 4. afterEach' + to + from)
  }
)

export default router
