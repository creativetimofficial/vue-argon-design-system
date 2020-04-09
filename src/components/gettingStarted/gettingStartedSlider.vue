<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
        <ol class="carousel-indicators">
            <li v-for="(caption, index) in captions" v-bind:key="index" data-target="#carouselExampleIndicators" :class="{ 'active': index === 0 }"></li>
        </ol>

        <div class="carousel-inner">
            <div class="carousel-item" :class="{ 'active': index === 0 }" v-for="(caption, index) in captions" v-bind:key="index">
                <img class="d-block w-100"
                    :src="getImgUrl(index)"
           
                    data-holder-rendered="true">
                <div>
                    <h5>{{caption.title}}</h5>
                    <p>{{caption.text}}</p>
                </div>
            </div>
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

</script>
<style>
</style>