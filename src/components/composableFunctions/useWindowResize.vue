<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const useWindowResize = () => {
  const width = ref(0)
  const height = ref(0)

  const handleWindowResize = (event: UIEvent) => {
    const target = event.currentTarget as Window;
    width.value = target.outerWidth;
    height.value = target.innerHeight;
  }

  onMounted(() => window.addEventListener("resize", handleWindowResize))
  onUnmounted(() => window.removeEventListener("resize", handleWindowResize))

  return {
    width,
    height
  }
}

export default useWindowResize
</script>
