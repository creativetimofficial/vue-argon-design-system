<template>
    <div class="row">
        <div
            class="col-md-6 col-lg-4 mb-5"
            v-for="(datenschutzCard, index) in datenschutzCardContent"
            v-bind:key="index"
        >
            <!-- Card -->
            <div class="card promoting-card">
                <!-- Card content -->
                <div class="card-body d-flex flex-row">
                    <!-- Content -->
                    <div>
                        <!-- Title -->
                        <h4 class="card-title font-weight-bold mb-2">{{datenschutzCard.title}}</h4>
                        <!-- Subtitle -->
                        <p class="card-text">{{datenschutzCard.desc}}</p>
                    </div>
                </div>

                <!-- Card image -->
                <div class="view overlay">
                    <img
                        class="card-img-top rounded-0"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                        alt="Card image cap"
                    />
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">
                    <div class="collapse-content">
                        <!-- Text -->
                        <p
                            class="card-text collapse"
                            :id="'collapseContent'+index"
                        >{{datenschutzCard.info}}</p>
                        <!-- Button -->

                        <!-- <a
                            class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
                            data-toggle="collapse"
                            :href="'#collapseContent'+index"
                            aria-expanded="false"
                            aria-controls="collapseContent"
                        ></a> -->
                        <button
                            data-toggle="collapse"
                            :href="'#collapseContent'+index"
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
            datenschutzCardContent: []
        };
    },
    props: {
        passDatenschutzCardContent: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.datenschutzCardContent = this.passDatenschutzCardContent;
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
.collapse-content p:not(.show) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 3.65rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.collapse-content p {
    hyphens: auto;
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
</style>