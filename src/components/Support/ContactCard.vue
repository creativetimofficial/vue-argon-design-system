<template>
    <div class="row justify-content-end">
        <div
            class="col-md-6 col-lg-4 mb-5"
            v-for="(contactCard, index) in contactCardContent"
            v-bind:key="index"
        >
            <div class="position-relative">
                <img class="d-block w-100" :src="contactCard.imgPath" data-holder-rendered="true" />
                <span class="question">
                    <h5>Potenzielle Frage</h5>
                    {{contactCard.question}}
                </span>
            </div>
            <div class="pt-4">
                <div class="mt-3">
                    <ul class="list-unstyled">
                        <li class="py-2">
                            <div class="d-flex align-items-center">
                                <h5 class="title">
                                    <span class="d-block">{{contactCard.supportTeam}}</span>
                                    <small class="h6 text-muted">{{contactCard.name}}</small>
                                </h5>
                            </div>
                        </li>
                        <li class="py-2">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-envelope mr-2"></i>
                                <p class="mb-0"><a :href="'mailto:'+contactCard.email">{{contactCard.email}}</a></p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa fa-slack mr-2"></i>
                                <p class="mb-0"><a :href="'https://hfggmuend.slack.com/app_redirect?channel='+contactCard.slack" target='_blank'>ask-helpdesk</a></p>
                                <!--</p> -->
                            </div>
                            <!-- <div class="d-flex align-items-center">
                                <i class="fa fa-phone mr-2"></i>
                                <p class="mb-0">{{contactCard.tel}}</p>
                            </div> -->
                        </li>
                        <!-- <li class="py-2">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-clock-o mr-2"></i>
                                <p class="mb-0">Mo. - Fr. {{contactCard.reach1}}</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa fa-clock-o mr-2 text-white"></i>
                                <p class="mb-0">
                                    <span class="text-white" style="margin-left: -7px">Mo. - Fr.</span>
                                    {{contactCard.reach2}}
                                </p>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            contactCardContent: []
        };
    },
    props: {
        passContactCardContent: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.contactCardContent = this.passContactCardContent;
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
.question {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
}
</style>