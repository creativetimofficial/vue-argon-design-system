<template>
    <div class="row">
        <div
            class="col-md-6 col-lg-3 mb-5"
            v-for="(datenschutzCard, index) in datenschutzCardContent"
            v-bind:key="index"
        >
            <div class>
                <img class="d-block w-100"
                    :src="datenschutzCard.imgPath"
                    data-holder-rendered="true">
                <div class="pt-4">
                    <div class="mt-3">
                        <ul class="list-unstyled">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <h5 class="title">
                                        <span class="d-block">{{datenschutzCard.supportTeam}}</span>
                                        <small class="h6 text-muted">{{datenschutzCard.name}}</small>
                                    </h5>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-envelope mr-2"></i>
                                    <p class="mb-0">{{datenschutzCard.email}}</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-slack mr-2"></i>
                                    <p class="mb-0">{{datenschutzCard.slack}}</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-phone mr-2"></i>
                                    <p class="mb-0">{{datenschutzCard.tel}}</p>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-clock-o mr-2"></i>
                                    <p class="mb-0">Mo. - Fr. {{datenschutzCard.reach1}}</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-clock-o mr-2 text-white"></i>
                                    <p class="mb-0">
                                        <span class="text-white" style="margin-left: -7px">Mo. - Fr.</span> {{datenschutzCard.reach2}}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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

<style>
</style>