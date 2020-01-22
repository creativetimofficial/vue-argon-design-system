<template>
    <div>
        <section class="section-shaped my-0">
            <div class="shape shape-dark shape-skew">
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6"><h1>About Us</h1></div>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper, ipsum non pharetra vehicula, massa neque congue nulla, non porttitor arcu nisl vitae quam. Suspendisse laoreet, odio et aliquet sagittis, magna quam molestie leo, eget iaculis urna neque at lorem. Praesent tempus neque sed rutrum viverra.</p>
                        <base-button tag="a" href="#" type="primary" class="mt-4">
                            Contact Us
                        </base-button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg mb-lg">
            <div class="container mt--300">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="text-dark">Our Team</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="text-dark">
                                    <span class="d-block mb-1">Ken Davis</span>
                                    <small>Owner</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="text-dark">
                                    <span class="d-block mb-1">Daniel Bardi</span>
                                    <small>Owner</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="text-dark">
                                    <span class="d-block mb-1">Melody Trotto</span>
                                    <small>Job Title</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="text-dark">
                                    <span class="d-block mb-1">Istvan Szabo</span>
                                    <small>Job Title</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
    name: "home",
    components: {}
    };
</script>