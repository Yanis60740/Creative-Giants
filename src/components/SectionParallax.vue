<script lang="js" setup>
import { onMounted } from 'vue';
import gsap from 'gsap'

onMounted(() => {
    gsap.fromTo('.sectionParallax__wrapper__boxTitle__sticky__wrapper__subtitle span', {
        yPercent: 150}, {
        yPercent: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.sectionParallax',
            start: 'top 50%',
        }
    })
    gsap.fromTo('.sectionParallax__wrapper__boxTitle__sticky__wrapper__title', {
        yPercent: 150}, {
        yPercent: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.sectionParallax',
            start: 'top 45%',
        }
    })
    
    const itemsPosition= document.querySelectorAll('.sectionParallax__wrapper__boxContent__colonne__background')
    const itemPosition1 = itemsPosition[0]
    const itemPosition2 = itemsPosition[1]
    const itemPosition3 = itemsPosition[2]
    const itemPosition4 = itemsPosition[3]
    const itemPosition5 = itemsPosition[4]
    const itemPosition6 = itemsPosition[5]

    const videoHeight= document.querySelectorAll('.sectionParallax__wrapper__boxContent__colonne__background__videoWrapper')
    const imageHeight= document.querySelectorAll('.sectionParallax__wrapper__boxContent__colonne__background__imgWrapper')
    const itemHeight1 = videoHeight[0]
    const itemHeight2 = videoHeight[1]
    const itemHeight3 = videoHeight[2]
    const itemHeight4 = imageHeight[0]
    const itemHeight5 = imageHeight[1]
    const itemHeight6 = videoHeight[3]

    gsap.fromTo(itemPosition1, {
        y: '105vh',
        aspectRatio: 213 / 352
    }, {
        yPercent: '-290',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition1,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight1, {
        yPercent: '-30',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition6,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.fromTo(itemPosition2, {
         y: '50vh',
         aspectRatio: 213 / 435
    }, {
        yPercent: '-311',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition2,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight2, {
        yPercent: '-30',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition2,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.fromTo(itemPosition3, {
         y: '145vh',
         aspectRatio: 213 / 261
    }, {
        yPercent: '-291',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition3,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight3, {
        yPercent: '-30',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition3,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.fromTo(itemPosition4, {
         y: '75vh',
         aspectRatio: 213 / 132
    }, {
        yPercent: '-245',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition4,
            start: 'bottom top',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight4, {
        yPercent: '-30',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition4,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.fromTo(itemPosition5, {
         y: '120vh',
         aspectRatio: 213 / 266
    }, {
        yPercent: '-281',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition5,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight5, {
        yPercent: '-30',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition5,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    gsap.fromTo(itemPosition6, {
         y: '75vh',
         aspectRatio: 213 / 287
    }, {
        yPercent: '-266',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition6,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })
    gsap.to(itemHeight6, {
        yPercent: '-50',
        ease: 'none',
        scrollTrigger: {
            trigger: itemPosition6,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    const cursor = document.querySelector('.parallaxLabel')
    const item = (document.querySelector(
        '.sectionParallax__wrapper__boxTitle__sticky__wrapper'
    ))

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

        gsap.to('.sectionParallax', {
            background: '#fffef7',
            ease: 'none',       
            scrollTrigger: {
                trigger: '.sectionParallax',
                start: '50% 50%',
                 end: 'bottom bottom',
                scrub: 1,
            }
    })
})

</script>

<template>
    <section class="sectionParallax">
        <div class="sectionParallax__wrapper">
            <div class="sectionParallax__wrapper__boxContent">
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <!-- <img src="@/assets/images/parallax1.jpg" alt="parallax image 1" class="sectionParallax__wrapper__boxContent__colonne__imgWrapper__img"/> -->
                        <div class="sectionParallax__wrapper__boxContent__colonne__background__videoWrapper">
                            <video autoplay muted loop>
                                <source src="/parallax/parallax1.mp4" data-wf-ignore="true">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <!-- <img src="@/assets/images/parallax1.jpg" alt="parallax image 1" class="sectionParallax__wrapper__boxContent__colonne__imgWrapper__img"/> -->
                        <div class="sectionParallax__wrapper__boxContent__colonne__background__videoWrapper">
                            <video autoplay muted loop>
                                 <source src="/parallax/parallax2.mp4" data-wf-ignore="true">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <!-- <img src="@/assets/images/parallax1.jpg" alt="parallax image 1" class="sectionParallax__wrapper__boxContent__colonne__imgWrapper__img"/> -->
                        <div class="sectionParallax__wrapper__boxContent__colonne__background__videoWrapper">
                            <video autoplay muted loop>
                                <source
                                    src="/parallax/parallax3.mp4" data-wf-ignore="true">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <img src="/parallax/parallax4.webp" loading="lazy" alt="parallax image 4" class="sectionParallax__wrapper__boxContent__colonne__background__imgWrapper" />
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <img src="/parallax/parallax5.webp" loading="lazy" alt="parallax image 5" class="sectionParallax__wrapper__boxContent__colonne__background__imgWrapper" />
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
                <div class="sectionParallax__wrapper__boxContent__colonne">
                    <div class="sectionParallax__wrapper__boxContent__colonne__background">
                        <!-- <img src="@/assets/images/parallax1.jpg" alt="parallax image 1" class="sectionParallax__wrapper__boxContent__colonne__imgWrapper__img"/> -->
                        <div class="sectionParallax__wrapper__boxContent__colonne__background__videoWrapper">
                            <video autoplay muted loop data-object-fit="cover">
                                <source
                                    src="/parallax/parallax6.mp4" data-wf-ignore="true">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="sectionParallax__wrapper__boxContent__line"></div>
            </div>
            <div class="sectionParallax__wrapper__boxTitle">
                <div class="sectionParallax__wrapper__boxTitle__sticky">
                    <div class="sectionParallax__wrapper__boxTitle__sticky__wrapper">
                        <div class="sectionParallax__wrapper__boxTitle__sticky__wrapper__subtitle is-clickable">
                            <span>Get Started</span>
                        </div>
                        <div class="sectionParallax__wrapper__boxTitle__sticky__wrapper__title is-clickable">
                            <div><span>Let's make</span></div>
                            
                            <div><span>things happen.</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallaxLabel">Make it happen</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../css/global.scss";
.sectionParallax {
    background: black;
    position: relative;
    &__wrapper {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        box-sizing: border-box;
        &__boxContent {
            grid-column-gap: .5rem;
            grid-row-gap: .5rem;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;
            grid-auto-columns: 1fr;
            height: 300vh;
            display: grid;
            position: relative;

            &__colonne {
                height: 200vh;
                margin-top: 50vh;
                margin-bottom: 50vh;

                &__background {
                    overflow: hidden;
                    &__imgWrapper {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                    &__videoWrapper {
                        z-index: 2;
                        height: 500px;
                        position: relative;
                        overflow: hidden;
                        img {
                            max-width: 100%;
                        }
                        video {
                            object-fit: cover;
                            z-index: -100;
                            background-position: 50%;
                            background-size: cover;
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            position: absolute;
                            inset: -100%;
                        }
                    }
                }
            }

            &__line {
                z-index: 40;
                mix-blend-mode: difference;
                background-image: linear-gradient(#fff0, #fff3 20% 80%, #fff0);
                width: 1px;
                height: 100%;
                position: relative;
            }
        }
        &__boxTitle {
            mix-blend-mode: difference;
            flex-flow: column;
            justify-content: flex-start;
            align-items: center;
            height: 300vh;
            display: flex;
            position: absolute;
            inset: 0%;
            z-index: 20;
            &__sticky {
                align-items: center;
                height: 100vh;
                display: flex;
                position: sticky;
                top: 0;
                overflow: hidden;
                &__wrapper {
                    grid-row-gap: 1.5rem;
                    flex-flow: column;
                    display: flex;
                    max-width: 70ch;
                        align-items: center;
                    &__subtitle {
                        color: white;
                        font-family: $font;
                        font-weight: 400;
                        font-size: 1rem;
                        text-transform: uppercase;
                        letter-spacing: -.02rem;
                        overflow: hidden;
                        & span {
                            display: block;
                            overflow: hidden;
                        }
                    }

                    &__title {
                        color: white;
                        font-family: $font;
                        font-weight: 300;
                        font-size: 5.25rem;
                        line-height: 1.1;
                        letter-spacing: -.04rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        overflow: hidden;
                        & div {
                            overflow: hidden;
                            padding: 4px;
                            box-sizing: border-box;
                        }
                        & span {
                            display: block;
                        }
                    }
                }
                
            }
        }
        
    }
}
.parallaxLabel {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    z-index: 9999;
    background: white;
    color: black;
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    border-radius: 999px;
    font-family: $font;

    will-change: transform;
}
</style>