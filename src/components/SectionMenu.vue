<script setup lang="js">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const sectionMenu = ref(null)
const menuText = ref(null)
const closeText = ref(null)
let tlStart
let tlReverse
let isOpen = false
let scrollY = 0

const lockScroll = () => {
  scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
}

const unlockScroll = () => {
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  window.scrollTo(0, scrollY)
}

onMounted(() => {
  tlStart = gsap.timeline({
    paused: true,
    onStart: lockScroll,
    })
    tlStart
    .to(sectionMenu.value, {
        top: '0vh',
        duration: 0.9,
        ease: 'power2.inOut'
        })
    .to(menuText.value, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power2.inOut'
        }, "<")
    .to(closeText.value, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power2.inOut'
        }, "<0.1")
  tlReverse = gsap.timeline({
    paused: true,
    onStart: unlockScroll,
    })
    tlReverse
    .to(sectionMenu.value, {
        top: '-100vh',
        duration: 0.9,
        ease: 'power2.inOut'
        })
    .to(menuText.value, {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.inOut'
        }, "<")
    .to(closeText.value, {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.inOut'
        }, "<")
    
    
})


const onClickMenu = () => {
    if (!isOpen) {
        isOpen = true
        tlStart.restart()
        return
    }else {
        isOpen = false
        tlReverse.restart()
        return
    }
}

const menuItems = [
  'Home',
  'Projects',
  'Process',
  'Latest News',
  'Contact'
]

const menuItemsRef = ref([])

const onEnter = (index) => {
  // Tous les items deviennent gris
  gsap.to(menuItemsRef.value, {
    color: '#666',
    duration: 0.1,
    ease: 'power2.out',
    overwrite: true
  })

  // Celui hover redevient blanc
  gsap.to(menuItemsRef.value[index], {
    color: '#fff',
    duration: 0.1,
    ease: 'power2.out',
    overwrite: true
  })
}

const onLeave = () => {
  // Tout redevient blanc
  gsap.to(menuItemsRef.value, {
    color: '#fff',
    duration: 0.1,
    ease: 'power2.out',
    overwrite: true
  })
}
</script>

<template>
  <button class="button is-clickable" @click="onClickMenu">
    <div ref="buttonText" class="button__text">
      <span ref="menuText" class="animButton">Menu</span>
      <span ref="closeText" class="animButton">Close</span>
    </div>
  </button>
  <div ref="sectionMenu" class="sectionMenu">
    <div class="sectionMenu__box">
      <div class="sectionMenu__box__left">
        <div class="sectionMenu__box__left__box">
          <div class="menuDetails">
            <p>©2025</p>
            <p>Privacy Policy | Cookies</p>
          </div>
        </div>
      </div>
      <div class="sectionMenu__box__center">
        <ul class="sectionMenu__box__center__list">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            ref="menuItemsRef"
            class="sectionMenu__box__center__list__item is-clickable"
            @mouseenter="onEnter(i)"
            @mouseleave="onLeave"
          >
            {{ item }}
          </li>
        </ul>
        <div class="menuDetails">
          <p class="is-clickable">88 London Rd, Brighton BN1 4JF</p>
          <p class="is-clickable">hello@creativegiants.art</p>
        </div>
      </div>
      <div class="sectionMenu__box__right">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/global.scss";
.button {
  z-index: 20;
  background-color: black;
  pointer-events: auto;
  color: white;
  border-radius: 100vw;
  padding: 1.6rem 2rem;
  display: flex;
  box-shadow: 0 0 0 1px #fff3;
  border: 0;
  &__text {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: 2em;
    display: flex;
    overflow: hidden;
    line-height: 28px;
    .animButton {
      font-family: $font;
      font-weight: 400;
      font-size: 1.9rem;
    }
  }
}
.sectionMenu {
  position: absolute;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 19;
  overflow: hidden;
  &__box {
    width: 100%;
    height: 100%;
    grid-column-gap: .75rem;
    grid-template-columns: 1fr 2fr 1fr;
    display: grid;
    box-sizing: border-box;
    padding: 13rem 3.5rem 3rem 3.5rem;
    font-family: $font;
    font-weight: 300;
    color: white;
    &__left, &__center, &__right {
      height: 100%;
      display: flex;
      align-items: flex-start;
    }
    &__left {
      align-items: flex-end;
      &__box {
        display: flex;
      }
    }
    &__center {
      flex-direction: column;
      justify-content: space-between;
      &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__item {
          font-size: 8.75rem;
          margin: 1.6rem 0;
          letter-spacing: -0.04em;
          line-height: .75;
          transition: color 0.3s ease;
          color: white;
          width: 100%;
        }        
      }
    }
    &__right {
      width: 20%;
      justify-content: flex-end;
    }
  }
}

.menuDetails {
  font-family: $font;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.4rem;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
