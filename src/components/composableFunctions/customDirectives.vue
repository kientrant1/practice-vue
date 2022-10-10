<script lang="ts">
/* eslint-disable no-console */
import type { VNode, DirectiveBinding } from 'vue'

interface IFullName {
  firstName: string;
  lastName: string;
}

const vAutoScrollToElement = {
  mounted: (el: HTMLElement, { value }: { value: boolean }, vnode: VNode) => {
    if (value) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    console.log('vAutoScrollToElement mounted', vnode)
  },
};

const vChangeTextColor = {
  created: () => {
    console.log('vChangeTextColor created')
  },
  beforeMount: () => {
    console.log('vChangeTextColor beforeMount')
  },
  mounted: (el: HTMLElement, bindings: DirectiveBinding) => {
    el.style.color = bindings.value
    console.log('vChangeTextColor mounted')
  },
  beforeUpdate: () => {
    console.log('vChangeTextColor beforeUpdated')
  },
  updated: (el: HTMLElement, bindings: DirectiveBinding) => {
    // update color
    el.style.color = bindings.value
    console.log('vChangeTextColor updated')
  },
  beforeUnmount: () => {
    console.log('vChangeTextColor beforeUnmount')
  },
  unmounted: () => {
    console.log('vChangeTextColor unmounted')
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
