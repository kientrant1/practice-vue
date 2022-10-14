<script lang="ts">
import type { VNode, DirectiveBinding } from 'vue'

import { log } from '@/utils/log'

interface IFullName {
  firstName: string;
  lastName: string;
}

const vAutoScrollToElement = {
  mounted: (el: HTMLElement, { value }: { value: boolean }, vnode: VNode) => {
    if (value) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    log('vAutoScrollToElement mounted' + vnode)
  },
};

const vChangeTextColor = {
  created: () => {
    log('vChangeTextColor created')
  },
  beforeMount: () => {
    log('vChangeTextColor beforeMount')
  },
  mounted: (el: HTMLElement, bindings: DirectiveBinding) => {
    el.style.color = bindings.value
    log('vChangeTextColor mounted')
  },
  beforeUpdate: () => {
    log('vChangeTextColor beforeUpdated')
  },
  updated: (el: HTMLElement, bindings: DirectiveBinding) => {
    // update color
    el.style.color = bindings.value
    log('vChangeTextColor updated')
  },
  beforeUnmount: () => {
    log('vChangeTextColor beforeUnmount')
  },
  unmounted: () => {
    log('vChangeTextColor unmounted')
  },
};

// Shorthand: this will be called for both `mounted` and `updated`
const positionStickyFunc = (
  el: HTMLElement,
  bindings: DirectiveBinding
) => {
  const pos: any = bindings.arg || 'top'
  el.style.position = 'sticky'
  el.style[pos] = bindings.value + 'px'
};

const fullName = {
  mounted: (el: HTMLElement, bindings: DirectiveBinding) => {
    const { value, modifiers }: { value: IFullName, modifiers: any} = bindings;
    const fullName = `${value.firstName} - ${value.lastName}`
    const fullNameWithBoldText = `<b>${fullName}</b>`
    el.innerHTML= modifiers.bold ? fullNameWithBoldText : fullName
  }
};

export {
  vAutoScrollToElement,
  vChangeTextColor,
  positionStickyFunc,
  fullName
}
</script>
