<script lang="js">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionMenu from './SectionMenu.vue';

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SectionNav',
  components: {
    SectionMenu
  },

  mounted() {
    const letters = this.$el.querySelectorAll('.letter')
    gsap.timeline({
      scrollTrigger: {
        trigger: '.sectionNav',
        start: 'top+=150',
        toggleActions: 'play none none reverse',    
        onEnter: () => {
          console.log('enter')
          this.$el
            .querySelector('.sectionNav__box__logo__text')
            ?.classList.remove('is-clickable')
        },
        onLeaveBack: () => {
          console.log('leave back')
          this.$el
            .querySelector('.sectionNav__box__logo__text')
            ?.classList.add('is-clickable')
        }
      }
    })
    .to(letters, {
      x: -25,
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }
}
</script>

<template>
  <div class="sectionNav">
    <div class="sectionNav__box">
        <div class="sectionNav__box__logo">
          <div class="sectionNav__box__logo__icon">
            <div class="sectionNav__box__logo__icon__svg is-clickable">
              <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M231.208 160.513V239.169C231.208 265.652 214.275 288.193 190.651 296.529C184.311 298.776 177.48 300 170.378 300C163.275 300 156.655 298.816 150.395 296.629C150.395 296.629 150.375 296.619 150.335 296.609C150.305 296.599 150.275 296.579 150.225 296.569C149.562 296.288 146.974 295.215 143.203 293.6C135.719 289.868 129.128 284.632 123.812 278.292C119.278 272.895 115.656 266.706 113.209 259.955C110.841 253.474 109.557 246.462 109.557 239.169V81.1041C109.557 80.6828 109.567 80.2715 109.597 79.8602C109.728 77.7235 110.189 75.6671 110.941 73.7611C113.881 66.1874 121.234 60.8306 129.831 60.8306C141.026 60.8306 150.104 69.909 150.104 81.1041V228.677C150.104 239.882 159.183 248.96 170.378 248.96C176.427 248.96 181.864 246.312 185.575 242.099C188.735 238.527 190.651 233.823 190.651 228.677V181.168L164.901 168.047L150.114 160.523L150.255 160.453L190.651 139.868L231.198 160.513H231.208ZM190.651 3.47088C184.311 1.22383 177.48 0 170.378 0C163.275 0 156.444 1.22383 150.104 3.47088L146.142 5.27653L109.557 22.009C114.924 20.103 120.642 18.9393 126.58 18.6284C127.654 18.5682 128.737 18.5381 129.831 18.5381C135.137 18.5381 140.273 19.2202 145.169 20.5042C146.844 20.9356 148.489 21.4372 150.104 22.009C173.728 30.3551 190.651 52.8857 190.651 79.3687V121.16L231.208 100.505V60.8306C231.208 34.3476 214.275 11.807 190.651 3.47088Z" fill="currentColor" fill-opacity="0.4"></path>
                <path d="M190.651 79.3686V121.16L187.06 119.334L178.965 115.211L150.104 100.505V81.1041C150.104 69.909 141.026 60.8305 129.831 60.8305C121.234 60.8305 113.881 66.1873 110.941 73.751C110.189 75.667 109.728 77.7235 109.597 79.8602C109.567 80.2715 109.557 80.6827 109.557 81.1041V239.169C109.557 246.462 110.841 253.474 113.209 259.954C115.656 266.706 119.278 272.895 123.812 278.292C129.128 284.632 135.719 289.868 143.203 293.6C134.967 290.049 121.103 283.829 109.557 277.509C101.532 273.106 95.4228 268.2 91.5105 265C77.7775 253.845 69 236.822 69 217.752V79.3686C69 78.8671 69.01 78.3655 69.0201 77.8739C69.1605 71.8852 70.1737 66.1071 71.9392 60.67C77.7474 42.6436 91.7513 28.2886 109.557 22.0089C114.924 20.1029 120.642 18.9393 126.58 18.6283C127.654 18.5681 128.737 18.538 129.831 18.538C135.137 18.538 140.273 19.2202 145.169 20.5042C146.844 20.9355 148.489 21.4371 150.104 22.0089C173.728 30.3551 190.651 52.8857 190.651 79.3686ZM164.9 168.046L150.114 160.523H150.104V228.676C150.104 239.882 159.183 248.96 170.378 248.96C176.427 248.96 181.864 246.312 185.575 242.099C188.735 238.527 190.651 233.823 190.651 228.676V181.168L164.9 168.046Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div class="sectionNav__box__logo__text is-clickable">
            <div class="letterWrapper"><div class="letter">u</div></div>
            <div class="letterWrapper"><div class="letter">n</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">q</div></div>
            <div class="letterWrapper"><div class="letter">u</div></div>
            <div class="letterWrapper"><div class="letter">e&nbsp;</div></div>
            <div class="letterWrapper"><div class="letter">p</div></div>
            <div class="letterWrapper"><div class="letter">u</div></div>
            <div class="letterWrapper"><div class="letter">b</div></div>
            <div class="letterWrapper"><div class="letter">l</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">c&nbsp;</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">n</div></div>
            <div class="letterWrapper"><div class="letter">t</div></div>
            <div class="letterWrapper"><div class="letter">e</div></div>
            <div class="letterWrapper"><div class="letter">r</div></div>
            <div class="letterWrapper"><div class="letter">v</div></div>
            <div class="letterWrapper"><div class="letter">e</div></div>
            <div class="letterWrapper"><div class="letter">n</div></div>
            <div class="letterWrapper"><div class="letter">t</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">o</div></div>
            <div class="letterWrapper"><div class="letter">n</div></div>
            <div class="letterWrapper"><div class="letter">s&nbsp;</div></div>
            <div class="letterWrapper"><div class="letter">/</div></div>
            <div class="letterWrapper"><div class="letter">/&nbsp;</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">m</div></div>
            <div class="letterWrapper"><div class="letter">m</div></div>
            <div class="letterWrapper"><div class="letter">e</div></div>
            <div class="letterWrapper"><div class="letter">r</div></div>
            <div class="letterWrapper"><div class="letter">s</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">v</div></div>
            <div class="letterWrapper"><div class="letter">e&nbsp;</div></div>
            <div class="letterWrapper"><div class="letter">a</div></div>
            <div class="letterWrapper"><div class="letter">c</div></div>
            <div class="letterWrapper"><div class="letter">t</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">v</div></div>
            <div class="letterWrapper"><div class="letter">a</div></div>
            <div class="letterWrapper"><div class="letter">t</div></div>
            <div class="letterWrapper"><div class="letter">i</div></div>
            <div class="letterWrapper"><div class="letter">o</div></div>
            <div class="letterWrapper"><div class="letter">n</div></div>
            <div class="letterWrapper"><div class="letter">s</div></div>
          </div>
        </div>
        <SectionMenu />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/global.scss";
.sectionNav {
  &__box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2.6rem;
    padding-left: 3.2rem;
    padding-right: 2rem;
    box-sizing: border-box;
    font-family: $font;
    font-weight: 400;
    font-size: 1.6rem;
    z-index: 20;
  }
  &__box__logo {
    grid-column-gap: .63rem;
    grid-row-gap: .63rem;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    z-index: 20;
    text-transform: uppercase;
    &__icon {
      background-color: black;
      border-radius: 100vw;
      width: 4.3rem;
      padding: .8rem;
      color: white;
      box-shadow: 0 0 0 1px #fff3;
      &__svg {
        justify-content: center;
        align-items: center;
        display: flex;
      }
    }
    &__text {
      max-width: 27ch;
      line-height: 1em;
      .letterWrapper{
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        .letter{
          display: inline-block;
          translate: none;
          rotate: none;
          scale: none;
          will-change: transform, opacity;
          transform: translate(0px, 0px);
          opacity: 1;
        }
      }
    }
  }
  
}
</style>