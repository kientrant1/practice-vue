import { createRouter, createWebHistory } from 'vue-router'

import MyBindings from '../views/MyBindings.vue'
import MyComposableFunction from '../views/MyComposableFunction.vue'
import MyEvents from '../views/MyEvents.vue'
import MyReactiveState from '../views/MyReactiveState.vue'
import MyWatchers from '../views/MyWatchers.vue'
import MyDirectives from '../views/MyDirectives.vue'
import MySFCs from '../views/MySFCs.vue'
import MyRouting from '../views/MyRouting.vue'
import LanguagueDetailComponent from '../components/sfcs/LanguagueDetailComponent.vue'

export const languageRoutes = [
  {
    name: 'Python',
    path: 'lang/:id',
    id: 1,
    component: LanguagueDetailComponent,
  },
  {
    name: 'Java',
    path: 'lang/:id',
    id: 2,
    component: LanguagueDetailComponent,
  },
  {
    name: 'Javascript',
    path: 'lang/:id',
    id: 3,
    component: LanguagueDetailComponent,
  },
]

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
        path: 'lang/:id',
        name: 'Languague',
        component: LanguagueDetailComponent,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
