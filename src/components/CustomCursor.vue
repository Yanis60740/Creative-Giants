<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const cursor = document.getElementById('cursor')

  const moveCursor = (e) => {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
  }

  const addHover = () => cursor.classList.add('active')
  const removeHover = () => cursor.classList.remove('active')

  window.addEventListener('mousemove', moveCursor)

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.is-clickable')) addHover()
  })
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.is-clickable')) removeHover()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', moveCursor)
  })
})
</script>


<template>
    <div id="cursor"></div>
</template>

<style scoped lang="scss">  
    #cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white; /* important pour difference */
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition:
    width 0.25s ease,
    height 0.25s ease,
    background-color 0.25s ease,
    transform 0.08s linear;
  mix-blend-mode: difference;
}

/* État hover */
#cursor.active {
  width: 20px;
  height: 20px;
}

</style>