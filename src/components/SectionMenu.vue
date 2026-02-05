<script setup lang="js">
import { ref, watch, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const toggleScroll = (isOpen) => {
  if (isOpen) {
    window.lenis?.stop();
  } else {
    window.lenis?.start();
  }
};

const sectionMenu = ref(null);
const props = defineProps({
  menuTarget: Object,
  closeTarget: Object,
});
let tlStart;
let tlReverse;
let isOpen = false;

const initTimelines = () => {
  if (!sectionMenu.value || !props.menuTarget || !props.closeTarget) return;

  tlStart = gsap.timeline({
    paused: true,
    onStart: () => toggleScroll(true),
  });

  tlStart
    .to(sectionMenu.value, {
      yPercent: 100,
      duration: 0.9,
      ease: "power2.inOut",
    })
    .to(
      props.menuTarget,
      {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "<",
    )
    .to(
      props.closeTarget,
      {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "<0.1",
    );

  tlReverse = gsap.timeline({
    paused: true,
    onStart: () => toggleScroll(false),
  });

  tlReverse
    .to(sectionMenu.value, {
      yPercent: 0,
      duration: 0.9,
      ease: "power2.inOut",
    })
    .to(
      props.menuTarget,
      { yPercent: 0, duration: 0.5, ease: "power2.inOut" },
      "<",
    )
    .to(
      props.closeTarget,
      { yPercent: 0, duration: 0.5, ease: "power2.inOut" },
      "<",
    );
};

watch(
  () => [props.menuTarget, props.closeTarget],
  async (newValues) => {
    if (newValues[0] && newValues[1]) {
      await nextTick();
      initTimelines();
    }
  },
  { immediate: true },
);

const onClickMenu = () => {
  if (!tlStart || !tlReverse) return;

  if (!isOpen) {
    isOpen = true;
    tlStart.restart();
  } else {
    isOpen = false;
    tlReverse.restart();
  }
};

const menuItems = ["Home", "Projects", "Process", "Latest News", "Contact"];

const menuItemsRef = ref([]);

const onEnter = (index) => {
  gsap.to(menuItemsRef.value, {
    color: "#666",
    duration: 0.1,
    ease: "power2.out",
    overwrite: true,
  });

  gsap.to(menuItemsRef.value[index], {
    color: "#fff",
    duration: 0.1,
    ease: "power2.out",
    overwrite: true,
  });
};

const onLeave = () => {
  gsap.to(menuItemsRef.value, {
    color: "#fff",
    duration: 0.1,
    ease: "power2.out",
    overwrite: true,
  });
};

const hover = (e) => {
  const line = e.currentTarget.querySelector(".underline");
  gsap.set(line, { xPercent: 0, transformOrigin: "bottom top" });
  gsap.killTweensOf(line);
  gsap.to(line, {
    scaleX: 1,
    xPercent: 0,
    duration: 0.7,
    ease: "power3.inOut",
  });
};

const unHover = (e) => {
  const line = e.currentTarget.querySelector(".underline");
  gsap.killTweensOf(line);
  gsap.to(line, {
    scaleX: 0,
    xPercent: 100,
    duration: 0.7,
    ease: "power3.inOut",
  });
};

defineExpose({
  onClickMenu,
});
</script>

<template>
  <section ref="sectionMenu" class="sectionMenu">
    <div class="sectionMenu__box">
      <div class="sectionMenu__box__top">
        <ul class="sectionMenu__box__top__list">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            ref="menuItemsRef"
            class="sectionMenu__box__top__list__item is-clickable"
            @mouseenter="onEnter(i)"
            @mouseleave="onLeave"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="sectionMenu__box__bottom">
        <div class="sectionMenu__box__bottom__box">
          <div class="menuDetails">
            <p>©2025</p>
            <p>Privacy Policy | Cookies</p>
          </div>
          <div class="menuDetails">
            <div
              class="menuDetails__info is-clickable"
              @mouseenter="hover($event)"
              @mouseleave="unHover($event)"
            >
              <p>88 London Rd, Brighton BN1 4JF</p>
              <span class="underline" ref="underline"></span>
            </div>
            <div
              class="menuDetails__info is-clickable"
              @mouseenter="hover($event)"
              @mouseleave="unHover($event)"
            >
              <p>hello@creativegiants.art</p>
              <span class="underline" ref="underline"></span>
            </div>
          </div>
          <div class="sectionMenu__box__right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../css/global.scss";

.sectionMenu {
  position: fixed;
  transform: translateY(-100%);
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 19;
  overflow: hidden;
  &__box {
    width: 100%;
    height: 100%;
    grid-column-gap: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8rem 2.5rem 2rem 2.5rem;
    font-family: $font;
    font-weight: 300;
    color: white;
    &__bottom,
    &__top,
    &__right {
      display: flex;
      align-items: center;
    }
    &__bottom {
      &__box {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
    &__top {
      flex-direction: column;
      justify-content: space-between;
      &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: max-content;
        &__item {
          font-size: $fontSize2;
          margin: 1rem 0;
          letter-spacing: -0.04em;
          line-height: 0.75;
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
  font-size: $fontSize6;
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
  transform-origin: bottom;
  transform: scaleX(0) translateX(0);
}
</style>
