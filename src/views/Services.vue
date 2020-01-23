<template>
    <div>
        <section class="section-shaped my-0">
            <div class="shape shape-dark shape-skew">
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6"><h1>Services</h1></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt--300">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 d-flex flex-column">
                                    <icon name="ni ni-check-bold" type="default" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-dark text-uppercase">Membrane Asphault</h6>
                                    <p class="description mt-3">Ut tincidunt tellus at dui porta feugiat. Curabitur at aliquet ligula, id aliquam libero. Integer convallis dui ut purus egestas, ut vulputate justo euismod. Pellentesque at justo a turpis malesuada accumsan vel ut mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse congue dignissim felis, non condimentum lacus laoreet in. </p>
                                   
                                    <base-button tag="a" href="#" type="default" class="mt-auto">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 d-flex flex-column">
                                    <icon name="ni ni-istanbul" type="default" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-dark text-uppercase">Metal</h6>
                                    <p class="description mt-3"> Suspendisse potenti. Donec vel sodales augue. Etiam consequat accumsan condimentum. Proin auctor maximus egestas. Integer eleifend dui at felis lacinia, id bibendum ligula fermentum. Vivamus imperdiet justo sit amet laoreet dignissim. </p>
                                    
                                    <base-button tag="a" href="#" type="default" class="mt-auto">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 d-flex flex-column">
                                    <icon name="ni ni-planet" type="default" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-dark text-uppercase">Exterior Clading</h6>
                                    <p class="description mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec vehicula ipsum, in semper dolor. Nunc nec metus nulla. Fusce eu pellentesque diam, sit amet molestie lacus. Donec quis mi at elit malesuada laoreet vitae nec odio. Aenean ultrices nisi ligula, non molestie nisl semper vel. Aliquam vulputate finibus urna nec bibendum. Morbi eget metus vestibulum, aliquet lorem eu, varius nibh.</p>
                                    
                                    <base-button tag="a" href="#" type="default" class="mt-auto">
                                        Learn more
                                    </base-button>
                                </card>
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