<template>
    <div class="row">
        <div
            class="col-md-6 col-lg-4 mb-5"
            v-for="(datenschutzCard, index) in datenschutzContent"
            v-bind:key="index"
        >
            <!-- Card -->
            <div class="card promoting-card">
                <!-- Card content -->
                <div class="card-body d-flex flex-row border-bottom">
                    <!-- Content -->
                    <div class="d-flex w-100">
                        <!-- Title -->
                        <h4 class="card-title font-weight-bold mb-2 d-inline-block">
                            <span v-html="datenschutzCard.title"></span>
                        </h4>
                        <!-- Subtitle -->
                        <div class="card-text ml-auto">
                            <div :class="'lights '+datenschutzCard.ampel">
                                <span class="top">&bull;</span>
                                <span class="middle">&bull;</span>
                                <span class="bottom">&bull;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card content -->
                <div class="card-body">
                    <div class="collapse-content">
                        <!-- Text -->
                        <div class="card-text collapse" :id="'collapseContent'+datenschutzCard.id">
                            <p class="w-100">{{datenschutzCard.info}}</p>
                            <ul>
                                <span v-html="datenschutzCard.bsp"></span>
                            </ul>
                        </div>
                        <!-- Button -->

                        <!-- <a
                            class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
                            data-toggle="collapse"
                            :href="'#collapseContent'+index"
                            aria-expanded="false"
                            aria-controls="collapseContent"
                        ></a>-->
                        <button
                            data-toggle="collapse"
                            :href="'#collapseContent'+datenschutzCard.id"
                            aria-expanded="false"
                            aria-controls="collapseContent"
                            type="button"
                            class="btn btn-default mt-3 bg-default text-white"
                        ></button>
                    </div>
                </div>
            </div>
            <!-- Card -->
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            datenschutzContent: []
        };
    },
    props: {
        passDatenschutzContent: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.datenschutzContent = this.passDatenschutzContent;
    },
    methods: {
        getImgUrl(index) {
            index++;
            return "img/getting-started/getting-started-" + index + ".jpg";
        }
    }
};
</script>

<style scoped>
.collapse-content div:not(.show) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    height: 3.65rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.collapse-content p {
    hyphens: auto;
}
.collapse-content ul {
    padding-left: 20px;
}
.collapse-content button {
    font-size: 0.7rem;
    border: none;
}
.collapse-content button.collapsed:after {
    content: "Read More";
}
.collapse-content button:not(.collapsed):after {
    content: "Read Less";
}
.card {
    border: 0.0625rem solid #cad1d7;
}
.lights {
    float: left;
    font-size: 60px;
    height: 60px;
    width: 20px;
}
.lights span {
    color: #ddd;
    display: block;
    line-height: 15px;
    text-align: center;
    width: 20px;
}
.lights.green .bottom {
    color: #1eb51e;
}
.lights.yellow .middle {
    color: #e2d529;
}
.lights.red .top {
    color: #d82c2c;
}
</style>