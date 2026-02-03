<script lang="js" setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

const linksItems = [
  ["Home"],
  ["Projects"],
  ["What we do"],
  ["Latest News"],
  ["Get in Touch"],
];

onMounted(() => {
  const items = document.querySelectorAll(
    ".sectionFooter__box__top__middle__item",
  );
  const colorMap = {
    HOME: "#ffd001",
    PROJECTS: "#009fff",
    "WHAT WE DO": "#48d1d6",
    "LATEST NEWS": "#fc4c00",
    "GET IN TOUCH": "#ee77cf",
  };

  items.forEach((item) => {
    const fill = item.querySelector(".bgAnim");
    const text = item.querySelector(
      ".sectionFooter__box__top__middle__item__text",
    );
    const arrow = item.querySelector("svg");

    const label = text.innerText.trim().toUpperCase();
    const activeColor = colorMap[label] || "#ffffff";

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.4, ease: "M0,0 C0.5,0 1,0.701 1,1 " },
    });

    tl.fromTo(
      fill,
      {
        yPercent: 101,
        backgroundColor: activeColor,
      },
      {
        yPercent: 0,
        backgroundColor: activeColor,
      },
    )
      .to(text, { color: "black" }, 0)
      .to(arrow, { color: "black" }, 0);

    item.addEventListener("mouseenter", () => tl.play());
    item.addEventListener("mouseleave", () => tl.reverse());
  });
});

const hover = (e) => {
  const line = e.currentTarget.querySelector(".underline");
  gsap.set(line, { xPercent: 0, transformOrigin: "left center" });
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
</script>

<template>
  <section class="sectionFooter">
    <div class="sectionFooter__box">
      <div class="sectionFooter__box__top">
        <div class="sectionFooter__box__top__left">
          <div class="sectionFooter__box__top__left__content">
            <div class="sectionFooter__box__top__left__content__title">
              <div class="sectionFooter__box__top__left__content__title__icon">
                <div
                  class="sectionFooter__box__top__left__content__title__icon__svg"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M231.208 160.513V239.169C231.208 265.652 214.275 288.193 190.651 296.529C184.311 298.776 177.48 300 170.378 300C163.275 300 156.655 298.816 150.395 296.629C150.395 296.629 150.375 296.619 150.335 296.609C150.305 296.599 150.275 296.579 150.225 296.569C149.562 296.288 146.974 295.215 143.203 293.6C135.719 289.868 129.128 284.632 123.812 278.292C119.278 272.895 115.656 266.706 113.209 259.955C110.841 253.474 109.557 246.462 109.557 239.169V81.1041C109.557 80.6828 109.567 80.2715 109.597 79.8602C109.728 77.7235 110.189 75.6671 110.941 73.7611C113.881 66.1874 121.234 60.8306 129.831 60.8306C141.026 60.8306 150.104 69.909 150.104 81.1041V228.677C150.104 239.882 159.183 248.96 170.378 248.96C176.427 248.96 181.864 246.312 185.575 242.099C188.735 238.527 190.651 233.823 190.651 228.677V181.168L164.901 168.047L150.114 160.523L150.255 160.453L190.651 139.868L231.198 160.513H231.208ZM190.651 3.47088C184.311 1.22383 177.48 0 170.378 0C163.275 0 156.444 1.22383 150.104 3.47088L146.142 5.27653L109.557 22.009C114.924 20.103 120.642 18.9393 126.58 18.6284C127.654 18.5682 128.737 18.5381 129.831 18.5381C135.137 18.5381 140.273 19.2202 145.169 20.5042C146.844 20.9356 148.489 21.4372 150.104 22.009C173.728 30.3551 190.651 52.8857 190.651 79.3687V121.16L231.208 100.505V60.8306C231.208 34.3476 214.275 11.807 190.651 3.47088Z"
                      fill="currentColor"
                      fill-opacity="0.4"
                    ></path>
                    <path
                      d="M190.651 79.3686V121.16L187.06 119.334L178.965 115.211L150.104 100.505V81.1041C150.104 69.909 141.026 60.8305 129.831 60.8305C121.234 60.8305 113.881 66.1873 110.941 73.751C110.189 75.667 109.728 77.7235 109.597 79.8602C109.567 80.2715 109.557 80.6827 109.557 81.1041V239.169C109.557 246.462 110.841 253.474 113.209 259.954C115.656 266.706 119.278 272.895 123.812 278.292C129.128 284.632 135.719 289.868 143.203 293.6C134.967 290.049 121.103 283.829 109.557 277.509C101.532 273.106 95.4228 268.2 91.5105 265C77.7775 253.845 69 236.822 69 217.752V79.3686C69 78.8671 69.01 78.3655 69.0201 77.8739C69.1605 71.8852 70.1737 66.1071 71.9392 60.67C77.7474 42.6436 91.7513 28.2886 109.557 22.0089C114.924 20.1029 120.642 18.9393 126.58 18.6283C127.654 18.5681 128.737 18.538 129.831 18.538C135.137 18.538 140.273 19.2202 145.169 20.5042C146.844 20.9355 148.489 21.4371 150.104 22.0089C173.728 30.3551 190.651 52.8857 190.651 79.3686ZM164.9 168.046L150.114 160.523H150.104V228.676C150.104 239.882 159.183 248.96 170.378 248.96C176.427 248.96 181.864 246.312 185.575 242.099C188.735 238.527 190.651 233.823 190.651 228.676V181.168L164.9 168.046Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <p>unique public interventions &nbsp;// immersive activations</p>
            </div>
            <div class="sectionFooter__box__top__left__content__text">
              <p>
                Founded by Simon Vaughan and Ben Kearns, we unite decades of
                combined expertise as visionary creatives and practical
                masterminds, redefining possibilities in the built environment.
              </p>
            </div>
          </div>
          <div class="sectionFooter__box__top__left__info">
            <div
              class="sectionFooter__box__top__left__info__text is-clickable"
              @mouseenter="hover($event)"
              @mouseleave="unHover($event)"
            >
              <p>88 London Rd, Brighton BN1 4JF</p>
              <span class="underline" ref="underline"></span>
            </div>
            <div
              class="sectionFooter__box__top__left__info__text is-clickable"
              @mouseenter="hover($event)"
              @mouseleave="unHover($event)"
            >
              <p>hello@creativegiants.art</p>
              <span class="underline" ref="underline"></span>
            </div>
            <div class="sectionFooter__box__top__left__info__socials">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="is-clickable"
              >
                <g clip-path="url(#clip0_7336_17983)">
                  <path
                    d="M7.125 1.89697C9.02738 1.89697 9.253 1.90409 10.0041 1.93853C10.7807 1.97416 11.5805 2.15109 12.1463 2.71694C12.7175 3.28813 12.8891 4.08019 12.9247 4.85919C12.9592 5.61028 12.9663 5.83591 12.9663 7.73828C12.9663 9.64066 12.9592 9.86628 12.9247 10.6174C12.8897 11.3898 12.7086 12.1973 12.1463 12.7596C11.5752 13.3308 10.7837 13.5024 10.0041 13.538C9.253 13.5725 9.02738 13.5796 7.125 13.5796C5.22262 13.5796 4.997 13.5725 4.24591 13.538C3.47938 13.503 2.66119 13.3177 2.10366 12.7596C1.53544 12.1914 1.36088 11.3916 1.32525 10.6174C1.29081 9.86628 1.28369 9.64066 1.28369 7.73828C1.28369 5.83591 1.29081 5.61028 1.32525 4.85919C1.36028 4.08969 1.54316 3.27744 2.10366 2.71694C2.67366 2.14694 3.46869 1.97416 4.24591 1.93853C4.997 1.90409 5.22262 1.89697 7.125 1.89697ZM7.125 0.613281C5.18997 0.613281 4.94712 0.621594 4.18713 0.656031C3.08572 0.7065 1.99203 1.01287 1.19581 1.80909C0.396625 2.60828 0.0932188 3.69959 0.04275 4.80041C0.0083125 5.56041 0 5.80325 0 7.73828C0 9.67331 0.0083125 9.91616 0.04275 10.6762C0.0932188 11.7764 0.400781 12.873 1.19581 13.6675C1.99441 14.4661 3.0875 14.7701 4.18713 14.8205C4.94712 14.855 5.18997 14.8633 7.125 14.8633C9.06003 14.8633 9.30287 14.855 10.0629 14.8205C11.1637 14.7701 12.2586 14.4631 13.0542 13.6675C13.854 12.8677 14.1568 11.777 14.2072 10.6762C14.2417 9.91616 14.25 9.67331 14.25 7.73828C14.25 5.80325 14.2417 5.56041 14.2072 4.80041C14.1568 3.699 13.8498 2.60472 13.0542 1.80909C12.2568 1.01169 11.1607 0.705906 10.0629 0.656031C9.30287 0.621594 9.06003 0.613281 7.125 0.613281Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M7.12487 4.0791C5.10434 4.0791 3.46619 5.71726 3.46619 7.73779C3.46619 9.75832 5.10434 11.3965 7.12487 11.3965C9.14541 11.3965 10.7836 9.75832 10.7836 7.73779C10.7836 5.71726 9.14541 4.0791 7.12487 4.0791ZM7.12487 10.1128C5.81328 10.1128 4.74987 9.04938 4.74987 7.73779C4.74987 6.4262 5.81328 5.36279 7.12487 5.36279C8.43647 5.36279 9.49988 6.4262 9.49988 7.73779C9.49988 9.04938 8.43647 10.1128 7.12487 10.1128Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M10.9284 4.78861C11.4006 4.78861 11.7834 4.40582 11.7834 3.93361C11.7834 3.46141 11.4006 3.07861 10.9284 3.07861C10.4562 3.07861 10.0734 3.46141 10.0734 3.93361C10.0734 4.40582 10.4562 4.78861 10.9284 4.78861Z"
                    fill="currentcolor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_7336_17983">
                    <rect
                      width="14.25"
                      height="14.25"
                      fill="white"
                      transform="translate(0 0.613281)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="is-clickable"
              >
                <path
                  d="M12.6262 12.8523H10.4739V9.48184C10.4739 8.67805 10.4596 7.64377 9.35445 7.64377C8.23357 7.64377 8.06179 8.51915 8.06179 9.42387V12.8523H5.91022V5.92095H7.97661V6.86789H8.00524C8.42682 6.14784 9.20986 5.71767 10.0437 5.74845C12.2254 5.74845 12.6269 7.18354 12.6269 9.04952L12.6262 12.8523ZM3.48165 4.97328C2.79166 4.97328 2.23265 4.41427 2.23265 3.72428C2.23265 3.03429 2.79166 2.47528 3.48165 2.47528C4.17164 2.47528 4.73065 3.03429 4.73065 3.72428C4.73065 4.41427 4.17164 4.97328 3.48165 4.97328ZM4.55743 12.8523H2.403V5.92095H4.55743V12.8523ZM13.6991 0.476888H1.32149C0.736716 0.470446 0.257158 0.939268 0.25 1.52404V13.9525C0.257158 14.538 0.736716 15.0068 1.32149 15.0003H13.6991C14.2853 15.0075 14.767 14.5387 14.7749 13.9525V1.52333C14.7663 0.93712 14.2846 0.468299 13.6991 0.476172"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="lineDivide"></div>
        <div class="sectionFooter__box__top__middle">
          <div
            v-for="(item, i) in linksItems"
            :key="i"
            class="sectionFooter__box__top__middle__item is-clickable"
          >
            <div class="bgAnim"></div>
            <div class="sectionFooter__box__top__middle__item__text">
              {{ item[0] }}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 14 14"
              fill="none"
              class="sectionFooter__box__top__middle__item__svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.86031 0.00280762H14V12.1417H12.8189V2.01904L0.83515 14.0028L0 13.1677L11.9838 1.18389H1.86031V0.00280762Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div class="lineDivide"></div>
        <div class="sectionFooter__box__top__right">
          <div class="sectionFooter__box__top__right__text">
            <div class="sectionFooter__box__top__right__text__title">
              <p>Ready to kick start a discovery session?</p>
            </div>
            <div class="sectionFooter__box__top__right__text__subtitle">
              <p>
                Share your ideas with us, and we’ll begin turning your vision
                into reality today.
              </p>
            </div>
          </div>
          <div class="sectionFooter__box__top__right__legal">
            <div class="sectionFooter__box__top__right__legal__text">
              <p>CREATIVE GIANTS ART LTD 2025 ©</p>
            </div>
            <div
              class="sectionFooter__box__top__right__legal__text is-clickable"
              @mouseenter="hover($event)"
              @mouseleave="unHover($event)"
            >
              <p>Website by Phunk</p>
              <span class="underline" ref="underline"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="sectionFooter__box__bottom">
        <div class="sectionFooter__box__bottom__svgBox">
          <div ref="svgBox" class="sectionFooter__box__bottom__svgBox__svgWrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 307 68"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              style="opacity: 1"
            >
              <path
                d="M71.89 0.449951L68.24 67.04H79.15L79.43 52.52H81.7L81.98 67.04H92.92L89.37 0.449951H71.89ZM79.67 43.9799L80.15 18.5499L80.22 10.6H80.84L80.98 18.5499L81.5 43.9799H79.68H79.67Z"
                fill="currentColor"
              ></path>
              <path
                d="M122.9 0.449951H112.33V67.04H122.9V0.449951Z"
                fill="currentColor"
              ></path>
              <path
                d="M90.9199 9.45995H95.7699V67.04H106.37V9.38995H111.16V0.449951L90.9199 0.519951V9.45995Z"
                fill="currentColor"
              ></path>
              <path
                d="M48.1099 31.2499V10.0799C48.1099 6.97994 47.2399 4.59994 45.4899 2.93994C43.7499 1.27994 41.1499 0.439941 37.7099 0.439941H24.9099V67.0299H35.4799V42.4199H36.6799L37.8199 67.0299H48.7299L46.1799 37.4999C47.4599 36.0099 48.1099 33.9199 48.1099 31.2399V31.2499ZM37.2399 31.7999C37.2399 33.4999 36.7899 34.3499 35.8999 34.3499H35.4899V9.45994H35.8999C36.7899 9.45994 37.2399 10.1599 37.2399 11.5599V31.7999Z"
                fill="currentColor"
              ></path>
              <path
                d="M60.57 58.02V36.9599H67.83V28.43H60.57V9.45995H68.1V0.449951H50V67.04H68.24V58.02H60.57Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.77 0C7.87 0 4.93 0.98 2.96 2.94C0.99 4.9 0 7.97 0 12.15V55.34C0 63.46 3.92 67.52 11.77 67.52C15.51 67.52 18.33 66.65 20.23 64.92C22.13 63.19 23.09 60.46 23.09 56.75V38.96L12.59 33.69V57.81C12.61 58.61 12.34 59.02 11.76 59.02C11.14 59.02 10.83 58.62 10.83 57.81V9.67C10.81 8.87 11.08 8.47 11.66 8.47C12.28 8.47 12.59 8.87 12.59 9.67V31.82L23.09 37.11V10.81C23.09 7 22.16 4.25 20.29 2.55C18.42 0.85 15.58 0 11.77 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M252.08 18.2099L253.15 36.5099H252.56L248.57 0.449951H238.42V67.04H248.26V49L247.3 29.6299H247.85L251.94 67.04H261.96V0.449951H252.08V18.2099Z"
                fill="currentColor"
              ></path>
              <path
                d="M263.13 9.45995H267.98V67.04H278.58V9.38995H283.36V0.449951L263.13 0.519951V9.45995Z"
                fill="currentColor"
              ></path>
              <path
                d="M216.63 0.449951L212.98 67.04H223.89L224.17 52.52H226.44L226.72 67.04H237.66L234.12 0.449951H216.64H216.63ZM224.41 43.9799L224.89 18.5499L224.96 10.6H225.58L225.72 18.5499L226.24 43.9799H224.42H224.41Z"
                fill="currentColor"
              ></path>
              <path
                d="M297.54 25.94L306.93 30.67V9.19001C306.93 6.23001 305.95 3.96001 304.01 2.38001C302.06 0.80001 299.27 0.0100098 295.65 0.0100098C292.03 0.0100098 288.96 0.90001 286.93 2.69001C284.9 4.48001 284.36 6.99001 284.36 10.23V25.82L284.29 31.97L294.79 37.25H294.83C296 37.86 296.58 38.85 296.58 40.21V58.04C296.58 58.75 296.27 59.11 295.65 59.11C295.03 59.11 294.69 58.71 294.69 57.91V39.08L284.19 33.79V58.4C284.17 64.5 288.01 67.55 295.72 67.55C299.39 67.55 302.26 66.62 304.32 64.76C306.38 62.9 306.84 60.29 306.84 56.91V37.88L306.93 32.48L296.43 27.2L296.15 27.05C295.16 26.43 294.67 25.44 294.67 24.09V9.57001C294.65 8.77001 294.95 8.37001 295.56 8.37001C296.13 8.37001 296.42 8.77001 296.42 9.57001V23.95C296.42 25.29 297.52 25.97 297.52 25.97L297.54 25.94Z"
                fill="currentColor"
              ></path>
              <path
                d="M158.92 36.9599H166.18V28.43H158.92V9.45995H166.46V0.449951H148.36V67.04H166.6V58.02H158.92V36.9599Z"
                fill="currentColor"
              ></path>
              <path
                d="M212.3 0.449951H201.73V67.04H212.3V0.449951Z"
                fill="currentColor"
              ></path>
              <path
                d="M136.17 42.5L136.11 53.79H135.42L135.35 42.5L134.35 0.449951H123.58L127.5 67.04H143.64L147.6 0.449951H136.83L136.17 42.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M188.59 0C184.55 0 181.56 0.97 179.61 2.91C177.66 4.85 176.69 7.93 176.69 12.15V57.37C176.69 60.81 177.32 63.36 178.58 65.03C179.84 66.69 181.6 67.53 183.84 67.53C185.68 67.53 187.06 67.11 187.99 66.27C188.92 65.43 189.61 64.05 190.07 62.12H190.55L191.76 67.04H199.78V37.04L188.36 31.32V40.38L189.29 40.85V57.89C189.29 58.78 188.96 59.23 188.31 59.23C187.66 59.23 187.33 58.85 187.33 58.09V9.67C187.31 8.87 187.58 8.47 188.16 8.47C188.78 8.47 189.09 8.87 189.09 9.67V29.9L199.79 35.19V9.88C199.81 3.3 196.08 0 188.61 0H188.59Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../css/global.scss";
.sectionFooter {
  padding: 0 2.5rem 2.5rem 2.5rem;
  background: black;
  color: white;

  &__box {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    &__top {
      display: grid;
      height: 100%;
      position: relative;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1px 1fr 1px 1fr;
      grid-auto-columns: 1fr;

      &__left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 2rem;
        &__content {
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          max-width: 36.2rem;
          &__title {
            display: flex;
            flex-direction: row;
            column-gap: 1rem;
            align-items: center;
            &__icon {
              background-color: #fffef7;
              border-radius: 100vw;
              color: black;
              box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
              width: 2.8rem;
              height: 2.8rem;
              padding: 0.5rem;
              &__svg {
                justify-content: center;
                align-items: center;
                display: flex;
              }
            }
            & p {
              font-family: $font;
              font-weight: 400;
              font-size: $fontSize6;
              text-transform: uppercase;
              max-width: 17rem;
              letter-spacing: -0.02em;
              line-height: 1;
            }
          }
          &__text {
            & p {
              color: #aaa;
              font-family: $font;
              font-weight: 400;
              font-size: $fontSize6;
              letter-spacing: -0.02em;
              line-height: 1.2;
            }
          }
        }

        &__info {
          color: #666;
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          &__text {
            max-width: max-content;
            & p {
              font-family: $font;
              font-size: $fontSize5;
              font-weight: 400;
              letter-spacing: -0.02em;
              line-height: 1;
            }
          }

          &__socials {
            display: flex;
            column-gap: 16px;
            & svg {
              width: 1.2rem;
              height: 1.2rem;
            }
            & svg:hover {
              color: #fffef7;
            }
          }
        }
      }

      &__middle {
        &__item {
          width: 100%;
          display: flex;
          column-gap: 1rem;
          align-items: center;
          padding: 1.8rem 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
          &__text {
            font-family: $font;
            font-size: $fontSize5;
            text-transform: uppercase;
            font-weight: 300;
            color: #fffef7;
            z-index: 1;
          }

          &__svg {
            width: 0.9rem;
            height: 0.8rem;
            color: white;
            z-index: 1;
          }
        }
      }

      &__right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 2rem;
        padding-left: 2.5rem;
        &__text {
          display: flex;
          flex-direction: column;
          max-width: 21rem;
          row-gap: 1rem;
          &__title {
            font-family: $font;
            font-size: $fontSize8;
            font-weight: 300;
            letter-spacing: -0.02em;
            color: #fffef7;
            line-height: 1;
          }
          &__subtitle {
            color: #aaa;
            font-family: $font;
            font-weight: 400;
            font-size: $fontSize6;
            letter-spacing: -0.02em;
            line-height: 1.2;
            max-width: 20rem;
          }
        }
        &__legal {
          margin-top: 2rem;
          display: flex;
          flex-direction: row;
          row-gap: 0.5rem;
          justify-content: space-between;
          &__text {
            color: #666;
            font-family: $font;
            font-size: $fontSize6;
            font-weight: 400;
            letter-spacing: -0.02em;
            line-height: 1;
            text-transform: uppercase;
            &.is-clickable {
              max-width: max-content;
            }
          }
        }
      }
    }
  }
}
.lineDivide {
  background-image: linear-gradient(
    180deg,
    rgba(77, 74, 74, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  mix-blend-mode: difference;
  width: 1px;
  height: 100%;
}
.bgAnim {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
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
