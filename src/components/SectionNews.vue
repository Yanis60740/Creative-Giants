<script lang="js" setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const newsContainerRef = ref(null);
const newsItems = [
    ["/news/news1.webp", "CALM Missed Birthdays Wins Big", "There are certain projects that offer a sense of pride, regardless of how they’re received in the industry. In fact our favourite work is often defined not by the number of awards it receives, but by how emotionally invested we are in the idea."],
    ["/news/news2.webp", "Shoulders of Giants", "Your monthly look at where we’re finding inspiration in the world"],
    ["/news/news3.webp", "Missed Birthdays wins Gold at Cannes Lions 2025!", "We are incredibly proud to announce that Missed Birthdays has been awarded a Gold Outdoor Lion at the 2025 Cannes Lions International Festival of Creativity."],
    ["/news/news4.webp", "The Rise of Visual Arts at UK Music Festivals", "In recent years, the UK’s music festival landscape has evolved into a vibrant meeting point for sound and vision. "],
    ["/news/news5.webp", "Shoulders of Giants", "Your monthly look at where we’re finding inspiration in the world"],
    ["/news/news6.webp", "Creative catch-ups: Iva Troj PhD", "We catch up with the amazingly talented artist, whose epic oil paintings combine traditional styles with contemporary concepts and subjects. "],
    ["/news/news7.webp", "Creative catch-ups: Sophie Oliveira Barata", "A quick five minutes with world-renowned prosthetic artist and innovator as she shares her thoughts on creativity."]
]

const prevBtn = ref(null);
const nextBtn = ref(null);

onMounted(() => {
    gsap.fromTo('.sectionNews__header__sectionTitle__wrapper', {
        yPercent: 160}, {
        yPercent: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.sectionNews',
            start: 'top 85%',
        }
    })
    gsap.fromTo('.sectionNews__header__boxTitle__title', {
        yPercent: 160}, {
        yPercent: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.sectionNews',
            start: 'top 65%',
        }
    })
    const cursor = document.querySelector('.newsLabel')
    const item = (document.querySelectorAll(
        '.sectionNews__content__box__image.is-clickable'
    ))

    let mouseX = 0
    let mouseY = 0

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
    })

    const cursorX = gsap.quickTo(cursor, "x", {
        duration: 0.6,
        ease: "power3.out"
    })

    const cursorY = gsap.quickTo(cursor, "y", {
        duration: 0.6,
        ease: "power3.out"
    })

    window.addEventListener("mousemove", (e) => {
        cursorX(e.clientX + 10)
        cursorY(e.clientY + 40)
    })

    item.forEach(el => {
        el.addEventListener('pointerenter', () => {
            gsap.to(cursor, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            })
        })

        el.addEventListener('pointerleave', () => {
            gsap.to(cursor, {
                autoAlpha: 0,
                scale: 0.8,
                duration: 0.25,
                ease: 'power2.out'
            })
        })
    })
});

let nbScrolls = 1;
const duration = 0.5;
const ease = "power1.inOut";


const next = () => {
    if (gsap.isTweening(newsContainerRef.value)) return;

    const boxWidth = newsContainerRef.value.querySelector('.sectionNews__content__box').offsetWidth;
    let gap = 40;
    if (window.innerWidth < 650) {
        gap = 16;
        nbScrolls = 0;
    }
    
    if (nbScrolls == 5){
        const boxWidth2 = boxWidth - (window.innerWidth - 2 * boxWidth - gap * 3);
        console.log(boxWidth);
        gsap.to(newsContainerRef.value, {
            x: `-=${boxWidth2 + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls += 1;
    }
    else if (nbScrolls < 5){
        gsap.to(newsContainerRef.value, {
            x: `-=${boxWidth + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls += 1;
    }

    if (nbScrolls == 2) {
        prevBtn.value.style.opacity = "1";
    } else if (nbScrolls == 6) {
        nextBtn.value.style.opacity = "0.3";
    }
};

const prev = () => {
    if (gsap.isTweening(newsContainerRef.value)) return;
    const boxWidth = newsContainerRef.value.querySelector('.sectionNews__content__box').offsetWidth;
    const gap = 40;
    if (window.innerWidth < 650) {
        gap = 16;
    }
    if (nbScrolls == 6){
        const boxWidth2 = boxWidth - (window.innerWidth - 2 * boxWidth - gap * 3);
        gsap.to(newsContainerRef.value, {
            x: `+=${boxWidth2 + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls -= 1;
    }
    else if (nbScrolls > 1){
        gsap.to(newsContainerRef.value, {
            x: `+=${boxWidth + gap}`,
            duration: duration,
            ease: ease
        });
        nbScrolls -= 1;
    }

    if (nbScrolls == 5) {
        nextBtn.value.style.opacity = "1";
    } else if (nbScrolls == 1) {
        prevBtn.value.style.opacity = "0.3";
    }
};


</script>

<template>
<section class="sectionNews">
    <div class="sectionNews__header">
        <div class="sectionNews__header__sectionTitle">
            <div class="sectionNews__header__sectionTitle__wrapper">
                <p>news and opinion</p>
            </div>
        </div>
        <div class="sectionNews__header__boxTitle">
            <div class="sectionNews__header__boxTitle__title">
                <p>Stay up to date</p>
            </div>
            <div class="sectionNews__header__boxTitle__slider">
                <div class ="sectionNews__header__boxTitle__slider__prev is-clickable" ref="prevBtn">
                    <button class="sliderButton" @click="prev()">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6846 3.41603L2.1005 12.0001L10.684 20.5836L11.5191 19.7484L4.36134 12.5906L21.309 12.5906L21.309 11.4095L4.36134 11.4095L11.5197 4.25118L10.6846 3.41603Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <div class ="sectionNews__header__boxTitle__slider__next is-clickable" ref="nextBtn">
                    <button class="sliderButton" @click="next()">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3154 3.41603L21.8995 12.0001L13.316 20.5836L12.4809 19.7484L19.6387 12.5906L2.69105 12.5906L2.69105 11.4095L19.6387 11.4095L12.4803 4.25118L13.3154 3.41603Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class ="sectionNews__content" ref="newsContainerRef">
        <div v-for="(item, i) in newsItems" :key="i" 
                class="sectionNews__content__box">
                <div class="sectionNews__content__box__image is-clickable">
                    <img :src="item[0]" :alt="item[1]" />
                </div>
                <div class="sectionNews__content__box__text">
                    <p class="sectionNews__content__box__text__title">{{ item[1] }}</p>
                    <div class="sectionNews__content__box__text__quote">
                        <p>{{ item[2] }}</p>
                    </div>
                </div>
        </div>
    </div>
    <div class="newsLabel">Read Article</div>
</section>
</template>

<style lang="scss" scoped>
@import "../css/global.scss";
.sectionNews {
    background: #fffef7;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
    grid-row-gap: 4rem;
    box-sizing: border-box;
    &__header {
        display: flex;
        align-items: flex-start;
        overflow: hidden;
        grid-row-gap: 1.5rem;
        flex-direction: column;
        &__sectionTitle {
            overflow: hidden;
            &__wrapper{
                font-family: $font;
                font-size: $fontSize6;
                line-height: 1;
                letter-spacing: -.02em;
                text-transform: uppercase;
                font-weight: 400;
            }
        }

        &__boxTitle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            overflow: hidden;
            &__title {
                font-family: $font;
                font-size: $fontSize2;
                font-weight: 300;
                letter-spacing: -.04em;
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
    }

    &__content {
        display: flex;
        column-gap: 2.5rem;
        &__box {
            grid-row-gap: 1rem;
            flex: none;
            width: 33.3333%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            &__image {
                aspect-ratio: 3 / 2;
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
                }
            }

            &__text {
                grid-row-gap: 1rem;
                flex-direction: column;   
                max-width: 66ch;
                display: flex;
                &__title {
                    font-family: $font;
                    font-size: $fontSize5;
                    font-weight: 400;
                    letter-spacing: -.04em;
                    line-height: 1.4;
                }

                &__quote {
                    color: #666;
                    font-family: $font;
                    font-size: $fontSize6;
                }
            }
        }
        &__box:hover {
            .sectionNews__content__box__image img {
                transform: scale(1.05);
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
.newsLabel {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    z-index: 9999;
    background: #fffef7;
    color: black;
    padding: 0.4rem 0.6rem;
    font-size: $fontSize7;
    text-transform: uppercase;
    border-radius: 999px;
    font-family: $font;
    border: 1px solid black;
    will-change: transform;
}
</style>