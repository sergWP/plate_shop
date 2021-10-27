<template>
    <div class="hero v-container">

        <div ref="mySlider" class="swiper-container mySwiper relative">
            <div class="swiper-wrapper">

                <div class="v-hero-item swiper-slide flex"
                     v-for="slide in slides"
                     :key="slide.id"
                >
                    <div class="hero-image">
                        <img
                            :src="require(`../assets/images/${slide.image}`)"
                            alt="Купить {{slide.name}}"
                        />
                    </div>
                    <div class="hero-content">
                        <div class="hero-name">{{slide.name}}</div>
                        <div class="hero-description">{{slide.description}}</div>
                    </div>
                </div>

            </div>

            <template v-if="slides.length > 0">

                <div class="swiper-navigations absolute right-0 bottom-0 z-50">
                    <div class="flex flex-row justify-end">

                        <template
                                v-for="slide in slides"
                                :key="slide.id"
                        >
                            <div class="navigation-button button-prev font-medium"
                                 v-if="slide.id==current_slide_number-1"
                            >
                                <div class="swiper-prev"
                                     @click="prevSlide"
                                >
                                    <div class="flex flex-col">
                                        <span class="navigation-button__default font-medium mb-3.5 text-2xl opacity-50">Previous</span>
                                        {{slide.name}}
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template
                                v-for="slide in slides"
                                :key="slide.id"
                        >
                            <div class="navigation-button button-next font-medium transition-all hover:shadow-inner"
                                 v-if="slide.id==current_slide_number+1"
                            >
                                <div class="swiper-next"
                                     @click="nextSlide"
                                >
                                    <div class="flex flex-col">
                                        <span class="navigation-button__default font-medium mb-3.5 text-2xl opacity-50">Next</span>
                                        {{slide.name}}
                                    </div>
                                </div>
                            </div>
                        </template>

                    </div>

                </div>

            </template>

        </div>

    </div>
</template>

<script>
    import 'swiper/swiper-bundle.min.css'

    import Swiper, { Navigation } from 'swiper';
    Swiper.use([Navigation]);

    export default {
        name: "v-hero",
        data() {
            return {
                current_slide_number: 1,
                slides: [
                    {id:1, 'image':'hero-1.png', 'name':"Bang Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:2, 'image':'hero-2.png', 'name':"Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:3, 'image':'hero-3.png', 'name':"Mantap Kemba Flower", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:4, 'image':'hero-4.png', 'name':"Ambert Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                ],
                slider: null,
                mySliderOptions: {
                    navigation: {
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    },
                }
            }
        },
        components: {},
        methods: {
            nextSlide() {
                this.current_slide_number++;
                this.slider.slideNext()
            },
            prevSlide() {
                this.current_slide_number--;
                this.slider.slidePrev()
            }
        },
        mounted () {
            this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions)
        }
    };
</script>

<style lang="scss" scoped>
    .hero-image {
        width: 608px;
    }
    .hero-content {
        width: calc(100% - 608px);
        padding: 186px 75px 0;
    }
    .hero-name {
        font-weight: 500;
        font-size: 68px;
        line-height: 83px;
        font-family: $fontFamily;
        color: $green;
        max-width: 608px;
    }
    .hero-description {
        font-family: $fontFamily;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        color: $dark;
        max-width: 608px;
        margin-top: 24px;
    }
    .swiper-navigations {
        width: calc(100% - 608px);
    }
    .navigation-button {
        width: 50%;
        font-family: $fontFamily;
        font-style: normal;
        font-size: 32px;
        line-height: 39px;
        padding: 40px 45px;

        &:hover {
            cursor: pointer;
        }

        .navigation-button__default {
            font-family: $fontFamily;
            font-style: normal;
        }

        &.button-next {
            background-color: $green;
            color: $white;

            .navigation-button__default {
                color: #F2F2F2;
            }
        }

        &.button-prev {
            background-color: transparent;
            color: $green;

            .navigation-button__default {
                color: #333;
            }
        }

    }
</style>