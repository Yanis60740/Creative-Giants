<script lang="js" setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const testimonialsContainerRef = ref(null);
const testimonialsItems = [
    ["Working with this team of brilliant, problem solving, passionate, agile Ninjas is such a joy. Their creative ambition & desire to help bring even the most eye watering & challenging projects to life is second to none.", "Nikki Cramphorn", "Adam&eveDDB"],
    ["Not content with executing whatever you ask of them to the highest standard, they consistently improve and develop concepts, taking them in exciting new directions I could have never foreseen.", "John Wildes", "Edelman"],
    ["I’ve worked with Creative Giants for many years, and they never fail to deliver… they jump head feet into all challenges and over-deliver every time. What I especially like about them is that they often enhance the creative, as well as being solutions orientated…", "Emilie Verlander", "Edelman"],
]
const prevBtn = ref(null);
const nextBtn = ref(null);

onMounted(() => {
    gsap.fromTo('.sectionTestimonials__header__title', {
        yPercent: 160}, {
        yPercent: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.sectionTestimonials',
            start: 'top 85%',
        }
    })

    startCarousel();
});

const nbItems = testimonialsItems.length;
let nbScrolls = 1;
const duration = 0.5;
const ease = "power1.inOut";


const next = () => {
    if (gsap.isTweening(testimonialsContainerRef.value)) return;
    const boxWidth = testimonialsContainerRef.value.querySelector('.sectionTestimonials__content__box').offsetWidth;
    let gap = 40;
    if (window.innerWidth < 650) {
        gap = 16;
    } 

    if (nbScrolls == nbItems - 1){
        const boxWidth2 = boxWidth - (window.innerWidth - boxWidth - gap * 2);
        gsap.to(testimonialsContainerRef.value, {
            x: `-=${boxWidth2 + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls += 1;
    }
    else if (nbScrolls < nbItems){
        gsap.to(testimonialsContainerRef.value, {
            x: `-=${boxWidth + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls += 1;
    }

    if (nbScrolls == 2) {
        prevBtn.value.style.opacity = "1";
    } else if (nbScrolls == nbItems) {
        nextBtn.value.style.opacity = "0.3";
    }
};

const prev = () => {
    if (gsap.isTweening(testimonialsContainerRef.value)) return;
    const boxWidth = testimonialsContainerRef.value.querySelector('.sectionTestimonials__content__box').offsetWidth;
    let gap = 40;
    if (window.innerWidth < 650) {
        gap = 16;
    } 

    if (nbScrolls == nbItems){
        const boxWidth2 = boxWidth - (window.innerWidth - boxWidth - gap * 2);
        gsap.to(testimonialsContainerRef.value, {
            x: `+=${boxWidth2 + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls -= 1;
    }
    else if (nbScrolls > 1){
        gsap.to(testimonialsContainerRef.value, {
            x: `+=${boxWidth + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls -= 1;
    }

    if (nbScrolls == nbItems - 1) {
        nextBtn.value.style.opacity = "1";
    } else if (nbScrolls == 1) {
        prevBtn.value.style.opacity = "0.3";
    }
};

const carousselItems = ["/caroussel/caroussel1.svg", "/caroussel/caroussel2.png", "/caroussel/caroussel3.svg", "/caroussel/caroussel4.svg", "/caroussel/caroussel5.svg", "/caroussel/caroussel6.svg", "/caroussel/caroussel7.svg", "/caroussel/caroussel8.svg","/caroussel/caroussel9.svg"];

const startCarousel = () => {
    gsap.to(".sectionTestimonials__caroussel__box", {
        duration: 20,
        ease: "none",
        xPercent: `-=` + 100,
        modifiers: {
        xPercent: gsap.utils.unitize(x => parseFloat(x) % 100),
        },
        repeat: -1
    });
}

</script>



<template>
    <section class="sectionTestimonials">
        <div class ="sectionTestimonials__header">
            <div class ="sectionTestimonials__header__title">
                <p>Testimonials</p>
            </div>
            <div class ="sectionTestimonials__header__slider">
                <div class ="sectionTestimonials__header__slider__prev is-clickable" ref="prevBtn">
                    <button class="sliderButton" @click="prev()">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6846 3.41603L2.1005 12.0001L10.684 20.5836L11.5191 19.7484L4.36134 12.5906L21.309 12.5906L21.309 11.4095L4.36134 11.4095L11.5197 4.25118L10.6846 3.41603Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <div class ="sectionTestimonials__header__slider__next is-clickable" ref="nextBtn">
                    <button class="sliderButton" @click="next()">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3154 3.41603L21.8995 12.0001L13.316 20.5836L12.4809 19.7484L19.6387 12.5906L2.69105 12.5906L2.69105 11.4095L19.6387 11.4095L12.4803 4.25118L13.3154 3.41603Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class ="sectionTestimonials__content" ref="testimonialsContainerRef">
            <div v-for="(item, i) in testimonialsItems" :key="i" 
                    class="sectionTestimonials__content__box">
                    <div class="sectionTestimonials__content__box__text">
                        <p class="sectionTestimonials__content__box__text__quote">{{ item[0] }}</p>
                        <div class="sectionTestimonials__content__box__text__author">
                            <p>{{ item[1] }}</p>
                            <p>{{ item[2] }}</p>
                        </div>
                    </div>
                    <div class="sectionTestimonials__content__box__svg">
                        <svg width="100%" height="100%" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5408 49H0V27.9186C0 24.1202 0.442177 20.5749 1.32653 17.2829C2.35828 13.8643 3.8322 10.8889 5.7483 8.35659C7.81179 5.82429 10.3912 3.79845 13.4864 2.27907C16.5816 0.759692 20.1927 0 24.3197 0V9.49613C21.8141 9.49613 19.7506 10.0659 18.1293 11.2054C16.5079 12.2184 15.1814 13.6111 14.1497 15.3837C13.1179 17.1563 12.381 19.1822 11.9388 21.4612C11.644 23.6137 11.4966 25.7662 11.4966 27.9186H24.5408V49ZM65 49H40.4592V27.9186C40.4592 24.1202 40.9014 20.5749 41.7857 17.2829C42.8175 13.8643 44.2914 10.8889 46.2075 8.35659C48.271 5.82429 50.8503 3.79845 53.9456 2.27907C57.0408 0.759692 60.6519 0 64.7789 0V9.49613C62.2732 9.49613 60.2098 10.0659 58.5884 11.2054C56.9671 12.2184 55.6406 13.6111 54.6088 15.3837C53.5771 17.1563 52.8401 19.1822 52.398 21.4612C52.1032 23.6137 51.9558 25.7662 51.9558 27.9186H65V49Z" fill="currentColor"></path>
                        </svg>
                    </div>          
            </div>
        </div>
        <div class ="sectionTestimonials__caroussel">
            <div class ="sectionTestimonials__caroussel__box"  aria-hidden="true">
                <div v-for="(item, index) in carousselItems" :key="index" class="sectionTestimonials__caroussel__box__item">
                    <img :src="item" />
                </div>
            </div>
            <div class ="sectionTestimonials__caroussel__box"  aria-hidden="true">
                <div v-for="(item, index) in carousselItems" :key="index" class="sectionTestimonials__caroussel__box__item">
                    <img :src="item" />
                </div>
            </div>
            <div class ="sectionTestimonials__caroussel__box"  aria-hidden="true">
                <div v-for="(item, index) in carousselItems" :key="index" class="sectionTestimonials__caroussel__box__item">
                    <img :src="item" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "../css/global.scss";
.sectionTestimonials {
    background: #fffef7;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    grid-row-gap: 3rem;
    box-sizing: border-box;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        &__title {
            font-family: $font;
            font-size: $fontSize6;
            line-height: 1;
            letter-spacing: -.02em;
            text-transform: uppercase;
            font-weight: 400;
        }

        &__slider {
            display: flex;
            flex-direction: row;
            column-gap: 10px;
            &__prev{
                opacity: .3;
            }
        }
    }

    &__content {
        display: flex;
        column-gap: 2.5rem;
        &__box {
            width: 60%;
            height: auto;
            padding: 3rem;
            justify-content: space-between;
            grid-column-gap: 5rem;
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
            flex-shrink: 0;
            &:nth-child(1) { background-color: #ffacea; color: #8a0467; }
            &:nth-child(2) { background-color: #a5ebd6; color: #03624c; }
            &:nth-child(3) { background-color: #101731; color: #a5c8eb;}
            &__text {
                font-family: $font;
                box-sizing: border-box;
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                grid-row-gap: 4rem;
                &__quote {
                    font-size: $fontSize4;
                    line-height: 1;
                    font-weight: 300;
                    letter-spacing: -.04em;  
                }

                &__author {
                    font-size: $fontSize6;
                }
            }

            &__svg {
                flex: none;
                width: 4.5rem;
                height: 4.5rem;
            }
        }
    }

    &__caroussel {
        display: flex;
        &__box {
            column-gap: 4rem;
            display: flex;
            padding-left: 2rem;
                padding-right: 2rem;
            &__item {
                flex: none;
                padding-left: 2rem;
                padding-right: 2rem;
                img {
                    filter: grayscale(100%);
                    height: 4rem;
                }
            }
        }

    }
}
.sliderButton{
    aspect-ratio: 1;
    border: 1px solid black;
    color: #fff;
    cursor: none;
    background-color: #0000;
    border-radius: 100vw;
    width: 2.5rem;
    height: 2.5rem;
    padding: .5rem;
    transition: opacity .3s;

    & svg{
        color: black;
    }
}
</style>