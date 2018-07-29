<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Bootstrap carousel</h1>
                    <p class="lead text-white mt-4">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                    <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html" class="btn btn-white mt-4">See all components</a>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <div id="carousel_example" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel_example" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel_example" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="img-fluid" src="img/theme/img-1-1200x1000.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="img/theme/img-2-1200x1000.jpg" alt="Second slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
