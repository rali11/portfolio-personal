export function useScrollWindow() {

  const y = ref(0)
  const x = ref(0)

  function update() {
    y.value = window.scrollY
    x.value = window.scrollX
  }

  onMounted(() => window.addEventListener('scroll', update))
  onUnmounted(() => window.removeEventListener('scroll', update))

  return { x, y }
}