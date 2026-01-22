import { createApp } from 'vue'
import App from './App.vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)

const lenis = new Lenis({
  duration: 0.8,
  smooth: true,
  easing: (t) => 1 - Math.pow(1 - t, 3)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

window.lenis = lenis

app.mount('#app')
