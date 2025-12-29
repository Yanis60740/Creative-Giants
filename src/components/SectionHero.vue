<script setup lang="js">
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref } from 'vue'

const pinEl = ref(null)


gsap.registerPlugin(ScrollTrigger)

let st

const createPin = () => {
  // reset styles
  if (pinEl.value) {
    pinEl.value.style.position = ''
    pinEl.value.style.left = ''
    pinEl.value.style.bottom = ''
    pinEl.value.style.width = ''
    pinEl.value.style.transform = ''
  }

  st = ScrollTrigger.create({
    trigger: '.sectionHero',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.pin-wrapper'
  })
}


const killPin = () => {
  if (!st || !pinEl.value) return

  // 1. Geler la position VISUELLE actuelle
  const rect = pinEl.value.getBoundingClientRect()

  pinEl.value.style.position = 'fixed'
  pinEl.value.style.left = `${rect.left}px`
  pinEl.value.style.bottom = '0'
  pinEl.value.style.width = `${rect.width}px`
  pinEl.value.style.transform = 'none'

  // 2. Tuer le pin
  st.kill()
  st = null
}


onMounted(() => {
  createPin()

  window.addEventListener('menu:open', killPin)
  window.addEventListener('menu:close', createPin)
})

onBeforeUnmount(() => {
  killPin()
  window.removeEventListener('menu:open', killPin)
  window.removeEventListener('menu:close', createPin)
})
</script>


<template>    
    <div class="sectionHero">
        <div class="sectionHero__videoWrapper">
            <div class="sectionHero__videoWrapper__video">
                <video autoplay muted loop>
                    <source src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F6790eb2f5ded350d9d7fa8b1_CreativeGiants_Hero_Showreel-transcode.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="sectionHero__subtitle">
            <div class="pin-wrapper" ref="pinEl">
                <div class="sectionHero__subtitle__textWrapper">
                    <div class="sectionHero__subtitle__textWrapper__text">
                        <p class="sectionHero__subtitle__textWrapper__text__top">Brighton, United Kingdom</p>
                        <p class="sectionHero__subtitle__textWrapper__text__bottom">Production, design, and the art of the possible.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../css/global.scss";
.sectionHero{
    position: relative;
    height: 140svh;
    &__videoWrapper {
        width: 100%;
        max-width: 100%;
        height: 100vh;
        position: fixed;
        &__video {
            height: 100%;
            video {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }
    &__subtitle {
        height: 100%;
        .pin-wrapper {
            height: 100vh;
            display: flex;
            align-items: flex-end;
        }
        &__textWrapper {
            &__text {
                grid-row-gap: 1.5rem;
                flex-flow: column;
                color: white;
                font-family: $font;
                display: flex;
                max-width: 80ch;
                line-height: 1;
                padding: 0 0 2rem 2.5rem;
                &__top {
                    font-size: 1rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: -.02rem;
                }
                &__bottom {
                    font-size: 3.6rem;
                    font-weight: 300;
                    letter-spacing: -.04rem;
                }
            }
        }
    }
}
</style>