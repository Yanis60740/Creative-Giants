<script setup>
import SectionLoading from "./components/SectionLoading.vue";
import SectionNav from "./components/SectionNav.vue";
import SectionHero from "./components/SectionHero.vue";
import SectionWhat from "./components/SectionWhat.vue";
import SectionProject from "./components/SectionProject.vue";
import SectionParallax from "./components/SectionParallax.vue";
import SectionTestimonials from "./components/SectionTestimonials.vue";
import SectionNews from "./components/SectionNews.vue";
import SectionContact from "./components/SectionContact.vue";
import SectionFooter from "./components/SectionFooter.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
  <SectionLoading />
  <SectionNav />
  <SectionHero />
  <SectionWhat />
  <SectionProject />
  <SectionParallax />
  <SectionTestimonials />
  <SectionNews />
  <SectionContact />
  <SectionFooter />
  <CustomCursor />
</template>

<style>
@import "css/global.scss";

@media screen and (max-width: 1200px) {
  .sectionLoading__loadingBanner {
    height: 55vh !important;
  }
  .sectionWhat__top__text {
    font-size: 3.5rem !important;
  }
  .svgBox {
    width: 2.7rem !important;
    height: 2.7rem !important;
  }
  .number {
    font-size: 3.5rem !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__img {
    width: 28rem !important;
    height: 37rem !important;
  }
  .sectionProject {
    padding-left: 140px !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox {
    max-width: 19rem !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox__title__text {
    font-size: 5rem !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__info {
    width: 45% !important;
    font-size: 1rem !important;
  }
  .sectionTestimonials__content__box__text {
    grid-row-gap: 1rem !important;
  }
  .sectionTestimonials__content__box__text__quote {
    font-size: 3rem !important;
  }
  .sectionTestimonials__content__box__svg {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }
  .sectionNews__header__boxTitle__title {
    font-size: 4.5rem !important;
  }
  .sectionContact__box {
    column-gap: 2rem !important;
  }
  .sectionContact__box__left__title {
    font-size: 4.5rem !important;
  }
  .formGroup input::placeholder {
    font-size: 2rem !important;
  }
}

@media screen and (max-width: 1000px) {
  /* Loading */
  .sectionLoading__loadingBanner {
    height: 40vh !important;
  }
  .sectionLoading__loadingBanner__svgBox {
    padding-bottom: 2rem !important;
  }
  /* Nav */
  .sectionNav__box__logo__icon {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  /* Menu */
  .button {
    padding: 0.55rem 1rem !important;
  }
  .animButton {
    font-size: 1.1rem !important;
  }
  .sectionMenu__box__top {
    align-items: flex-start !important;
  }
  .sectionMenu__box__top__list__item {
    font-size: 3.5rem !important;
  }
  .sectionMenu__box__bottom__box {
    flex-direction: row-reverse !important;
  }
  .sectionMenu__box__right {
    display: none !important;
  }
  .menuDetails:first-child {
    align-items: flex-end !important;
  }
  /* Hero */
  .sectionHero__subtitle__textWrapper__text__bottom {
    font-size: 2rem !important;
  }
  /* What */
  .sectionWhat__top__text {
    font-size: 2.5rem !important;
  }
  .line {
    line-height: 1.2 !important;
    padding-bottom: 0 !important;
  }
  .sectionWhat__bottom {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sectionWhat__bottom__box__text {
    font-size: 1rem !important;
  }
  .svgBox {
    width: 2.7rem !important;
    height: 2.7rem !important;
  }
  .number {
    font-size: 3rem !important;
  }
  /* Project */
  .sectionProject {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
    height: max-content !important;
  }
  .sectionProject__container__itemWrapper {
    flex-direction: column !important;
  }
  .sectionProject__container__itemWrapper__item {
    flex-direction: column !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox {
    max-width: max-content !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox__title__text {
    font-size: 3.5rem !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox {
    transform: none !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper {
    flex-direction: column-reverse !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__img {
    width: 100% !important;
    height: 46rem !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__info {
    width: max-content !important;
    flex-direction: column-reverse !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__info__production {
    flex-direction: row !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__info__text {
    width: 65% !important;
  }
  .sectionProject__container__progressWrapper {
    display: none !important;
  }
  /* Parallax */
  .sectionParallax__wrapper__boxTitle__sticky__wrapper__title {
    font-size: 4rem !important;
    line-height: 1.2 !important;
  }
  /* Testimonials */
  .sectionTestimonials__content__box {
    width: 85% !important;
    grid-column-gap: 3rem !important;
  }
  .sectionTestimonials__content__box__text__quote {
    font-size: 1.7rem !important;
  }
  .sectionTestimonials__content__box__svg {
    width: 3rem !important;
    height: 3rem !important;
  }
  /* News */
  .sectionNews__header__boxTitle__title {
    font-size: 3.5rem !important;
  }
  .sectionNews__content__box {
    width: 48% !important;
  }
  .sectionNews__content__box__text__quote {
    font-size: 0.9rem !important;
  }
  /* Contact */
  .sectionContact__box {
    flex-direction: column !important;
    row-gap: 3rem !important;
  }
  .sectionContact__box__left__title {
    font-size: 3.5rem !important;
  }
  .submit-btn {
    padding: 0.18rem 0rem !important;
    padding-left: 1rem !important;
    width: 12rem !important;
  }
  .submit-btn__wrapper {
    padding-left: 1.2rem !important;
  }
  .submit-btn__wrapper__circle {
    padding: 0.68rem !important;
  }
  /* Footer */
  .sectionFooter__box__top__left__content__title__icon {
    flex-shrink: 0 !important;
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  .sectionFooter__box__top__left__content__title p {
    font-size: 0.9rem !important;
  }
  .sectionFooter__box__top__right__text__title {
    font-size: 1.5rem !important;
  }
  .sectionFooter__box__top__left__info__text p {
    font-size: 1rem !important;
  }
  .sectionFooter__box__top__right__legal__text {
    font-size: 0.9rem !important;
  }
}

@media screen and (max-width: 800px) {
  .sectionWhat__top__text {
    font-size: 2.3rem !important;
  }
  .sectionProject__container__itemWrapper__item__rightBox__wrapper__info {
    width: 100% !important;
  }
  .sectionFooter__box__top__middle__items {
    padding: 1.5rem 1rem !important;
  }
  .sectionFooter__box__top__middle__item__text {
    font-size: 1rem !important;
  }
  .sectionFooter__box__top__left__content__text p {
    font-size: 0.8rem !important;
  }
  .sectionFooter__box__top__right__text__title {
    font-size: 1.2rem !important;
  }
  .sectionFooter__box__top__right__text__subtitle {
    font-size: 0.8rem !important;
  }
  .sectionFooter__box__top__right__legal__text {
    font-size: 0.7rem !important;
  }
  .sectionFooter__box__top__left__info__text p {
    font-size: 0.8rem !important;
  }
  .sectionFooter__box__top__left__content__title p {
    font-size: 0.7rem !important;
  }
}

@media screen and (max-width: 650px) {
  /* Loading */
  .sectionLoading__loadingBanner__svgBox {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
/* Nav */
  .sectionNav__box {
    padding-right: 1rem !important;
  }
  .sectionNav__box__logo {
    padding-left: 1rem !important;
  }
  .sectionNav__box__logo__text {
    display: none !important;
  }
/* Hero */
  .sectionHero__subtitle__textWrapper__text {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
/* Menu */
  .sectionMenu__box {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .menuDetails {
    font-size: 0.8rem !important;
  }
  /* What */
  .sectionWhat {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .sectionWhat__top__box {
    font-size: 1rem !important;
  }
  .sectionWhat__top__text {
    font-size: 1.5rem !important;
  }
  .sectionWhat__bottom__box__text {
    font-size: 0.8rem !important;
  }
  .svgBox {
    width: 2rem !important;
    height: 2rem !important;
  }
  .number {
    font-size: 2rem !important;
  }
  .label {
    font-size: 0.8rem !important;
  }
  /* Project */
  .sectionProject{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .sectionProject__container__itemWrapper__item{
    row-gap: 1rem !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox{
        row-gap: 1rem !important;
  }
  .sectionProject__container__itemWrapper__item__leftBox__title__text {
    font-size: 2.5rem !important;
  }
  /* Parallax */
  .sectionParallax__wrapper{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  /* Testimonials */
  .sectionTestimonials{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .sliderButton{
        width: 2rem !important;
    height: 2rem !important;
  }
  .sectionTestimonials__content{
    column-gap: 1rem !important;
  }
  .sectionTestimonials__content__box{
    padding: 2rem !important;
    grid-column-gap: 1rem !important;
  }
  .sectionTestimonials__content__box__text__quote {
        font-size: 1.3rem !important;
    }
    .sectionTestimonials__content__box__svg {
        width: 2.5rem !important;
        height: 2.5rem !important;
    }
    .sectionTestimonials__caroussel__box{
      column-gap: 2rem !important;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    .sectionTestimonials__caroussel__box__item img{
      height: 3.5rem !important;
    }
  /* News */
  .sectionNews{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-top: 2rem !important;
    padding-bottom: 5rem !important;
  }
  .sectionNews__header__boxTitle__title {
    font-size: 2.5rem !important;
  }
  .sectionNews__content{
    column-gap: 1rem !important;
  }
  .sectionNews__content__box{
    width: 90% !important;
  }
  /* Contact */
  .sectionContact{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .sectionContact__box__left__title {
        font-size: 2.5rem !important;
    }
    .formGroup label {
        font-size: 0.8rem !important;
    }
    .formGroup input::placeholder {
        font-size: 1.5rem !important;
    }
  /* Footer */
  .sectionFooter{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .sectionFooter__box__top{
    display: flex !important;
    flex-direction: column !important;
  }
      .sectionFooter__box__top__left__content__title p {
        font-size: 0.9rem !important;
    }
    .sectionFooter__box__top__left{
      row-gap: 1rem !important;
    padding-bottom: 2rem !important;
    }
    .sectionFooter__box__top__middle__item{
      padding-left: 1rem !important;
    padding-right: 1rem !important;
    }
    .sectionFooter__box__top__middle__item__text {
        font-size: 0.9rem !important;
    }
    .sectionFooter__box__top__right{
      padding-top: 1rem !important;
      padding-left: 0rem !important;
    }
}
</style>
