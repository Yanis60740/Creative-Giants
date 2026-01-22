<script setup lang="js">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const toggleScroll = (isOpen) => {
  if (isOpen) {
    window.lenis?.stop()
  } else {
    window.lenis?.start()
  }
}

const sectionMenu = ref(null)
const menuText = ref(null)
const closeText = ref(null)
let tlStart
let tlReverse

onMounted(() => {
  tlStart = gsap.timeline({
    paused: true,
    onStart: () => toggleScroll(true),
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
    onStart: () => toggleScroll(false),
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

let isOpen = false
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

const hover = (e) => {
  const line = e.currentTarget.querySelector('.underline')
  gsap.set(line, {xPercent: 0, transformOrigin: 'left center' })
  gsap.killTweensOf(line)
  gsap.to(line, { scaleX: 1, xPercent: 0, duration: 0.7, ease: 'power3.inOut' })
}

const unHover = (e) => {
  const line = e.currentTarget.querySelector('.underline')
  gsap.killTweensOf(line)
  gsap.to(line, { scaleX: 0, xPercent: 100, duration: 0.7, ease: 'power3.inOut' })
}
</script>

<template>
  <button class="button is-clickable" @click="onClickMenu">
    <div ref="buttonText" class="button__text">
      <span ref="menuText" class="animButton">Menu</span>
      <span ref="closeText" class="animButton">Close</span>
    </div>
  </button>
  <section ref="sectionMenu" class="sectionMenu">
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
          <div class="menuDetails__info is-clickable" @mouseenter="hover($event)" @mouseleave="unHover($event)">
            <p>88 London Rd, Brighton BN1 4JF</p>
            <span class="underline" ref="underline"></span>
          </div>
          <div class="menuDetails__info is-clickable" @mouseenter="hover($event)" @mouseleave="unHover($event)">
            <p>hello@creativegiants.art</p>
            <span class="underline" ref="underline"></span>
          </div>
        </div>
      </div>
      <div class="sectionMenu__box__right">
        
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../css/global.scss";
.button {
  z-index: 20;
  background-color: black;
  pointer-events: auto;
  color: white;
  border-radius: 100vw;
  padding: .75rem 1.5rem;
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
      font-size: 1.4em;
    }
  }
}
.sectionMenu {
  position: fixed;
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
    padding: 8rem 2rem 2rem 2rem;
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
          font-size: 5.4rem;
          margin: 1rem 0;
          letter-spacing: -0.04em;
          line-height: .75;
          transition: color 0.3s ease;
          color: #fffef7;
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
  font-size: 1.1rem;
  line-height: 1.2rem;
  row-gap: 0.4rem;
  display: flex;
  flex-direction: column;
  &__info {
    width: max-content;
  }
  p {
    margin: 0;
    padding: 0;
  }
}

.underline {
  display: block;
  height: 1px;
  background-color: #666;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0) translateX(0);
}
</style>
