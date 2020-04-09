<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-wrap="false">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            <div class="carousel-item" :class="{ 'active': index === 0 }" v-for="(caption, index) in captions"  v-bind:key="index">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                    alt="First slide [800x400]"
                    :src="getImgUrl(index)"
           
                    data-holder-rendered="true">
                <div>
                    <h5>{{caption.title}}</h5>
                    <p>{{caption.text}}</p>
                </div>
            </div>
            <!-- <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                    alt="Second slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-2.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-3.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-4.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-5.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-6.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-7.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-8.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-9.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-10.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-11.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-12.jpg"
                    data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="~@/assets/media/images/getting-started/getting-started-13.jpg"
                    data-holder-rendered="true">
            </div> -->
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>


<script>
export default {
    data() {
        return {
            captions: []
        };
    },
    props: {
        passGettingStartedCaptions: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.captions = this.passGettingStartedCaptions;
    },
    methods: {
        getImgUrl(index) {
            index ++;
            return 'img/getting-started/getting-started-'+index+'.jpg'
        }
    }
};

$('.carousel').carousel({
  interval: false,
  wrap: false,
  keyboard: false
})

</script>
<style>
</style>