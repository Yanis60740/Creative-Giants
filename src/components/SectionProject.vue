<script lang="js" setup>
import { onMounted } from 'vue';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const projectItems = [
    ["Project 01", "Halo Masterpiece", "/img/project01.webp", "Production", "London", "Edelman", "XBOX", "A 6X3 metre renaissance-style oil painting to support the launch of Xbox’s flagship video game, Halo Infinite."],
    ["Project 02", "Impossible to ignore", "/img/project02.webp", "Production", "London", "Adam & Eve DDB", "CRISIS", "A 2.5 ton, 4.3m high, hyper-realistic sculpture of a homeless man, installed at London Kings Cross and Birmingham’s Bullring."],
    ["Project 03", "Silent Fall", "/img/project03.webp", "Event Management", "Guest Experience Services", "Art Consultancy", "Superblue-A.A Murakami", "A fully immersive exhibition by Superblue London and artist duo AA Murakami."],
];

onMounted(() => {
    const container = document.querySelector('.sectionProject')
    const track = document.querySelector('.sectionProject__container__itemWrapper')
    const images = document.querySelectorAll('.sectionProject__container__itemWrapper__item__rightBox')
    const totalScrollWidth = track.scrollWidth
    const viewportWidth = window.innerWidth
    const itemWidthDeduction = images[images.length - 1].offsetWidth - (images[images.length - 1].offsetWidth / 2.5);



    // Scroll horizontal principal
    gsap.to(track, {
        x: () => -(totalScrollWidth - viewportWidth + itemWidthDeduction),
        ease: 'none',
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 1
        }
    })

    const image1 = images[0]
    const image2 = images[1]
    const image3 = images[2]
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            scrub: true
        }
    })
    tl.fromTo(image1,
        { xPercent: -27 },
        { xPercent: -40, ease: 'power1.out' }
    )

    tl.fromTo(image2,
        { xPercent: -10 },
        { xPercent: -23, ease: 'power1.out' },
        "<30%" // démarre EN MÊME TEMPS que image1
    )

    tl.fromTo(image3,
        { xPercent: 0 },
        { xPercent: -13, ease: 'power1.out' },
        ">" // démarre APRÈS image2
    )

    const progressBar = document.querySelector(
        '.sectionProject__container__progressWrapper__progressBar__fill'
    )

    gsap.to(progressBar, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            scrub: true
        }
    })

    const progressText = document.querySelector(
        '.sectionProject__container__progressWrapper__progressText p'
    )

    gsap.to(progressText, {
        innerText: 3,
        roundProps: "innerText",
        ease: 'none',
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            scrub: true,
            onUpdate: (self) => {
                const total = 3
                const progress = Math.max(1, Math.ceil(self.progress * total))
                progressText.innerText = `[${progress} / ${total}]`
            }
        }
    })

    const cursor = document.querySelector('.cursorLabel')
    const items = document.querySelectorAll(
        '.sectionProject__container__itemWrapper__item__rightBox__wrapper__img__image-wrapper'
    )

    let mouseX = 0
    let mouseY = 0

    // Position cible (mise à jour en temps réel)
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


    items.forEach(item => {
        item.addEventListener('pointerenter', () => {
            gsap.to(cursor, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            })
        })

        item.addEventListener('pointerleave', () => {
            gsap.to(cursor, {
                autoAlpha: 0,
                scale: 0.8,
                duration: 0.25,
                ease: 'power2.out'
            })
        })
    })


})
</script>

<template>
    <section class="sectionProject">
        <div class="sectionProject__container">
            <div class="sectionProject__container__itemWrapper">
                <div v-for="(item, i) in projectItems" :key="i" ref="projectItemsRef"
                    class="sectionProject__container__itemWrapper__item">
                    <div class="sectionProject__container__itemWrapper__item__leftBox">
                        <div class="sectionProject__container__itemWrapper__item__leftBox__label">
                            <p class="sectionProject__container__itemWrapper__item__leftBox__label__text">
                                {{ item[0] }}
                            </p>
                        </div>
                        <div class="sectionProject__container__itemWrapper__item__leftBox__title">
                            <p class="sectionProject__container__itemWrapper__item__leftBox__title__text">
                                {{ item[1] }}
                            </p>
                        </div>
                    </div>
                    <div class="sectionProject__container__itemWrapper__item__rightBox">
                        <div class="sectionProject__container__itemWrapper__item__rightBox__wrapper">
                            <div
                                class="sectionProject__container__itemWrapper__item__rightBox__wrapper__img is-clickable">
                                <div class="sectionProject__container__itemWrapper__item__rightBox__wrapper__img__image-wrapper">
                                    <img loading="lazy" :src="item[2]" alt="" class="image-wrapper_image" />
                                </div>
                            </div>
                            <div class="sectionProject__container__itemWrapper__item__rightBox__wrapper__info">
                                <div
                                    class="sectionProject__container__itemWrapper__item__rightBox__wrapper__info__production">
                                    <p>{{ item[3] }}</p>
                                    <p>{{ item[4] }}</p>
                                    <p>{{ item[5] }}</p>
                                    <p>{{ item[6] }}</p>
                                </div>
                                <div
                                    class="sectionProject__container__itemWrapper__item__rightBox__wrapper__info__text">
                                    <p>{{ item[7] }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sectionProject__container__progressWrapper">
                <div class="sectionProject__container__progressWrapper__progressBar">
                    <div class="sectionProject__container__progressWrapper__progressBar__fill"></div>
                </div>
                <div class="sectionProject__container__progressWrapper__progressText">
                    <p></p>
                    <div class="sectionProject__container__progressWrapper__progressText__viewAll is-clickable">
                        <p>View All Projects</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="inherit"
                            class="sectionProject__container__progressWrapper__progressText__viewAll__svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.86031 0H14V12.1389H12.8189V2.01623L0.83515 14L0 13.1648L11.9838 1.18108H1.86031V0Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="cursorLabel">View Project</div>
    </section>
</template>

<style scoped lang="scss">
@import "../css/global.scss";

.sectionProject {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: black;
    position: relative;
    padding: 6.5rem 0 6.5rem 11.5rem;

    &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5rem;

        &__itemWrapper {
            display: flex;
            gap: 4rem;

            &__item {
                display: flex;
                gap: 2rem;
                position: relative;
                transform: none;

                &__leftBox {
                    row-gap: 1.5rem;
                    flex-flow: column;
                    display: flex;
                    z-index: 2;
                    mix-blend-mode: difference;
                    width: max-content;
                    max-width: 35rem;
                    pointer-events: none;
                    &__label {
                        &__text {
                            font-family: $font;
                            font-weight: 400;
                            font-size: 1rem;
                            color: white;
                            text-transform: uppercase;
                            letter-spacing: -0.02em;
                            line-height: 1;
                        }
                    }

                    &__title {
                        &__text {
                            font-family: $font;
                            font-weight: 300;
                            font-size: 6rem;
                            color: white;
                            letter-spacing: -0.04rem;
                            line-height: 1;
                        }
                    }
                }

                &__rightBox {
                    position: relative;

                    // transform: translateX(-24%);
                    &__wrapper {
                        display: flex;
                        gap: 2rem;

                        &__img {
                            width: 38rem;
                            height: 33rem;
                            // position: relative;
                            &__image-wrapper {
                                width: 100%;
                                height: 100%;
                                will-change: transform;
                            }
                            img {
                                width: inherit;
                                height: inherit;
                                object-fit: cover;
                            }
                        }

                        &__info {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            color: white;
                            font-size: 1.2rem;
                            line-height: 1.4;
                            letter-spacing: -0.02em;
                            font-weight: 400;
                            font-family: $font;
                            width: 22rem;
                            gap: 2rem;

                            &__production {
                                display: flex;
                                flex-direction: column;
                                gap: 0.5rem;

                                p {
                                    text-transform: uppercase;
                                    text-decoration: underline;
                                }
                            }

                            &__text {
                                p {}
                            }
                        }
                    }
                }
            }
        }

        &__progressWrapper {
            width: 88%;
            gap: 1rem;
            display: flex;
            flex-direction: column;

            &__progressBar {
                // width: 80%;
                height: 1px;
                background-color: #666;

                &__fill {
                    width: 0%;
                    height: 100%;
                    background-color: white;
                }
            }

            &__progressText {
                display: flex;
                color: white;
                justify-content: space-between;

                p {
                    font-family: $font;
                    font-weight: 400;
                    font-size: 1rem;
                    margin: 0;
                    padding: 0;
                }

                &__viewAll {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: $font;
                    font-weight: 400;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    &__svg {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }
        }
    }
}

.cursorLabel {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    //   transform: translate(0%, -100%);
    opacity: 0;
    z-index: 9999;

    background: #fffef7;
    color: black;
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    border-radius: 999px;
    font-family: $font;

    will-change: transform;
}
</style>
