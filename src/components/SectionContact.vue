<script lang="js" setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const btn = document.querySelector(".submit-btn");
  const fill = document.querySelector(".bgAnim");
  const text = btn.querySelector("p");
  const circle = btn.querySelector(".submit-btn__wrapper__circle");
  const arrow = btn.querySelector("svg path");

  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.6, ease: "power4.inOut" },
  });

  tl.fromTo(fill, { yPercent: 101 }, { yPercent: 0 })
    .to(text, { color: "black" }, 0)
    .to(circle, { backgroundColor: "black" }, 0)
    .to(arrow, { fill: "#ffd001" }, 0);
  btn.addEventListener("mouseenter", () => tl.play());
  btn.addEventListener("mouseleave", () => tl.reverse());
});
</script>

<template>
  <section class="sectionContact">
    <div class="sectionContact__box">
      <div class="sectionContact__box__left">
        <div class="sectionContact__box__left__sectionTitle">
          <p>Get in touch</p>
        </div>
        <div class="sectionContact__box__left__title">
          <p>Speak to us.</p>
        </div>
        <div class="sectionContact__box__left__text">
          <p>
            If you want to start a project, share an idea or simply say hi, we
            want to hear from you.
          </p>
        </div>
      </div>
      <div class="sectionContact__box__right">
        <div class="sectionContact__box__right__names">
          <div class="formGroup">
            <label for="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Emma"
              required
            />
          </div>
          <div class="formGroup">
            <label for="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Lewis"
              required
            />
          </div>
        </div>
        <div class="sectionContact__box__right__emailPhone">
          <div class="formGroup">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="emma@email.com"
              required
            />
          </div>
          <div class="formGroup">
            <label for="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+44"
              required
            />
          </div>
        </div>
        <div class="sectionContact__box__right__project">
          <div class="formGroup">
            <label for="projectDetails">Project details</label>
            <input
              type="text"
              id="projectDetails"
              name="projectDetails"
              placeholder="Tell us about your project..."
              required
            />
          </div>
        </div>
        <button type="submit" class="submit-btn is-clickable">
          <div class="bgAnim"></div>
          <p>Send enquiry</p>
          <div class="submit-btn__wrapper">
            <div class="submit-btn__wrapper__circle">
              <div class="submit-btn__wrapper__circle__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.86031 0.00280762H14V12.1417H12.8189V2.01904L0.83515 14.0028L0 13.1677L11.9838 1.18389H1.86031V0.00280762Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../css/global.scss";

.sectionContact {
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  padding-bottom: 7rem;
  background: #fffef7;

  &__box {
    display: flex;
    column-gap: 24rem;

    &__left {
      max-width: 27rem;
      row-gap: 1rem;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;

      &__sectionTitle {
        font-family: $font;
        font-size: $fontSize6;
        line-height: 1;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        font-weight: 400;
      }
      
      &__title {
        font-family: $font;
        font-size: $fontSize2;
        font-weight: 300;
        letter-spacing: -0.04em;
      }

      &__text {
        font-family: $font;
        font-size: $fontSize6;
        line-height: 1.4;
        letter-spacing: -0.02em;
        font-weight: 300;
        flex-shrink: 0;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      row-gap: 3rem;
      width: 100%;

      &__names {
        display: flex;
        column-gap: 1rem;
      }

      &__emailPhone {
        display: flex;
        column-gap: 1rem;
      }

      &__project {
        display: flex;
      }
    }
  }
}

.formGroup {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;

  label {
    font-family: $font;
    font-size: $fontSize6;
    letter-spacing: -0.02em;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #666;
  }

  input {
    font-family: $font;
    font-size: $fontSize6;
    border: none;
    min-height: 4rem;
    background: #fffef7;
    border-bottom: 1px solid #666;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: $fontSize9;
      letter-spacing: -0.02em;
      font-weight: 300;
    }
  }
}

.submit-btn {
  position: relative;
  overflow: hidden;
  background-color: black;
  pointer-events: auto;
  color: white;
  border-radius: 100vw;
  padding: 0.28rem 1.15rem;
  padding-right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 13rem;
  border: 1px solid black;
  & p {
    font-family: $font;
    font-size: $fontSize6;
    line-height: 1;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    font-weight: 400;
    z-index: 2;
  }
  &__wrapper {
    padding-left: 1rem;
    z-index: 2;
    &__circle {
      background: #fffef7;
      border-radius: 99px;
      padding: 0.88rem;

      &__arrow {
        display: flex;
        align-items: center;
        width: 0.88rem;
        height: 0.88rem;
      }
    }
  }
}

.bgAnim {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffd001;
  z-index: 1;
}
</style>
