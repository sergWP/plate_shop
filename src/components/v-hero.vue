<template>
    <div class="hero v-container">

        <div ref="mySlider" class="swiper-container mySwiper">
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

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

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
                slides: [
                    {id:1, 'image':'hero-1.png', 'name':"Kembang Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:2, 'image':'hero-2.png', 'name':"Kembang Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:3, 'image':'hero-3.png', 'name':"Kembang Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
                    {id:4, 'image':'hero-4.png', 'name':"Kembang Flower Mantap", 'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                ],
                slider: null,
                mySliderOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            }
        },
        components: {},
        methods: {
            next() {
                this.slider.slideNext()
            }
        },
        mounted () {
            this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions)
        }
    };
</script>

<style scoped>

</style>