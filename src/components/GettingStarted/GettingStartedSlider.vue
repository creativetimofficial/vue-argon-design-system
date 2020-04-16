<template>
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-wrap="false"
        data-interval="false"
    >
        <ol class="carousel-indicators">
            <li
                v-for="(caption, index) in captions"
                v-bind:key="index"
                data-target="#carouselExampleIndicators"
                :class="{ 'active': index === 0 }"
            ></li>
        </ol>

        <div class="carousel-inner">
            <div
                class="carousel-item"
                :class="{ 'active': index === 0 }"
                v-for="(caption, index) in captions"
                v-bind:key="index"
            >
                <div class="row">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid fit-image"
                            :src="getImgUrl(index)"
                            data-holder-rendered="true"
                        />
                    </div>

                    <div class="col-lg-5" style="margin-top: 30px;">
                        <h4>{{caption.title}}</h4>
                        <p><span v-html="caption.text"></span></p>
                    </div>
                </div>
            </div>
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
        >
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
            index++;
            return "img/getting-started/getting-started-" + index + ".gif";
        }
    }
};
</script>
<style scroped>
.fit-image {
    object-fit: cover;
}
</style>