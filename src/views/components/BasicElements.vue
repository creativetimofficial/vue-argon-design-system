<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <!-- Basic elements -->
                    <h2 class="mb-5">
                        <span>Basic Elements</span>
                    </h2>
                    <!-- Buttons -->
                    <h3 class="h4 text-success font-weight-bold mb-4">Buttons</h3>
                    <!-- Button styles -->
                    <div>
                        <base-button type="primary">Button</base-button>
                        <base-button class="btn-3" type="primary" icon="ni ni-bag-17">Button</base-button>
                        <base-button class="btn-2" type="primary" icon="ni ni-bag-17"></base-button>

                        <!-- Button wizes -->
                        <div class="mb-3 mt-5">
                            <small class="text-uppercase font-weight-bold">Pick your size</small>
                        </div>

                        <base-button type="primary" size="sm">Small</base-button>
                        <base-button type="primary">Regular</base-button>
                        <base-button type="primary" size="lg">Large Button</base-button>

                    </div>
                    <!-- Button colors -->
                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Pick your color</small>
                    </div>
                    <base-button class="btn-1" type="primary">Primary</base-button>
                    <base-button class="btn-1" type="info">Info</base-button>
                    <base-button class="btn-1" type="success">Success</base-button>
                    <base-button class="btn-1" type="warning">Warning</base-button>
                    <base-button class="btn-1" type="danger">Danger</base-button>
                    <base-button class="btn-1" type="neutral">Neutral</base-button>

                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Outline</small>
                    </div>

                    <base-button class="btn-1" outline type="primary">Outline Primary</base-button>
                    <base-button class="btn-1" outline type="info">Outline Info</base-button>
                    <base-button class="btn-1" outline type="success">Outline Success</base-button>
                    <base-button class="btn-1" outline type="warning">Outline Warning</base-button>
                    <base-button class="btn-1" outline type="danger">Outline Danger</base-button>
                    <base-button class="btn-1" outline type="neutral">Outline Neutral</base-button>
                    <!-- Button links -->
                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Links</small>
                    </div>
                    <a href="#" class="btn btn-link text-default">Default</a>
                    <a href="#" class="btn btn-link text-primary">Primary</a>
                    <a href="#" class="btn btn-link text-info">Info</a>
                    <a href="#" class="btn btn-link text-success">Success</a>
                    <a href="#" class="btn btn-link text-warning">Warning</a>
                    <a href="#" class="btn btn-link text-danger">Danger</a>
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
