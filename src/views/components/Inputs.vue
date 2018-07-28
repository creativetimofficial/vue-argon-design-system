<template>
    <section class="section pb-0 section-components">
        <div class="container mb-5">
            <!-- Inputs -->
            <h3 class="h4 text-success font-weight-bold mb-4">Inputs</h3>
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">Form controls</small>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                        <input type="text" placeholder="Regular" class="form-control" />
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                            </div>
                            <input class="form-control" placeholder="Search" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                        <input type="text" placeholder="Regular" class="form-control" disabled />
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-4">
                            <input class="form-control" placeholder="Birthday" type="text">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group has-success">
                        <input type="text" placeholder="Success" class="form-control is-valid" />
                    </div>
                    <div class="form-group has-danger">
                        <input type="email" placeholder="Error Input" class="form-control is-invalid" />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 bg-secondary">
            <div class="container">
                <!-- Inputs (alternative) -->
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">Form controls (alternative)</small>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="form-group">
                            <input type="text" placeholder="Regular" class="form-control form-control-alternative" />
                        </div>
                        <div class="form-group">
                            <div class="input-group input-group-alternative mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                </div>
                                <input class="form-control" placeholder="Search" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="form-group">
                            <input type="text" placeholder="Regular" class="form-control form-control-alternative " disabled />
                        </div>
                        <div class="form-group">
                            <div class="input-group input-group-alternative mb-4">
                                <input class="form-control" placeholder="Birthday" type="text">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="form-group has-success">
                            <input type="text" placeholder="Success" class="form-control form-control-alternative is-valid" />
                        </div>
                        <div class="form-group has-danger">
                            <input type="email" placeholder="Error Input" class="form-control form-control-alternative is-invalid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  export default {}
</script>
<style>
</style>
