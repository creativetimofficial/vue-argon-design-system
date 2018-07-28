<template>
    <section class="section">
        <div class="container">
            <!-- Custom controls -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <!-- Checkboxes -->
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">Checkboxes</small>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input class="custom-control-input" id="customCheck1" type="checkbox">
                        <label class="custom-control-label" for="customCheck1">
                            <span>Unchecked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input class="custom-control-input" id="customCheck2" type="checkbox" checked>
                        <label class="custom-control-label" for="customCheck2">
                            <span>Checked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input class="custom-control-input" id="customCheck3" type="checkbox" disabled>
                        <label class="custom-control-label" for="customCheck3">
                            <span>Disabled Unchecked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input class="custom-control-input" id="customCheck4" type="checkbox" checked disabled>
                        <label class="custom-control-label" for="customCheck4">
                            <span>Disabled Checked</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <!-- Radio buttons -->
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">Radios</small>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input name="custom-radio-1" class="custom-control-input" id="customRadio1" type="radio">
                        <label class="custom-control-label" for="customRadio1">
                            <span>Unchecked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input name="custom-radio-1" class="custom-control-input" id="customRadio2" checked type="radio">
                        <label class="custom-control-label" for="customRadio2">
                            <span>Checked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input name="custom-radio-2" class="custom-control-input" id="customRadio3" disabled type="radio">
                        <label class="custom-control-label" for="customRadio3">
                            <span>Disabled unchecked</span>
                        </label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input name="custom-radio-2" class="custom-control-input" id="customRadio4" checked disabled type="radio">
                        <label class="custom-control-label" for="customRadio4">
                            <span>Disabled checkbox</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <!-- Toggle buttons -->
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">Toggle buttons</small>
                    </div>
                    <label class="custom-toggle">
                        <input type="checkbox">
                        <span class="custom-toggle-slider rounded-circle"></span>
                    </label>
                    <span class="clearfix"></span>
                    <label class="custom-toggle">
                        <input type="checkbox" checked>
                        <span class="custom-toggle-slider rounded-circle"></span>
                    </label>
                </div>
                <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">Sliders</small>
                    </div>
                    <!-- Simple slider -->
                    <div class="input-slider-container">
                        <div id="input-slider" class="input-slider" data-range-value-min="100" data-range-value-max="500"></div>
                        <!-- Input slider values -->
                        <div class="row mt-3 d-none">
                            <div class="col-6">
                                <span id="input-slider-value" class="range-slider-value" data-range-value-low="100"></span>
                            </div>
                        </div>
                    </div>
                    <!-- Range slider -->
                    <div class="mt-5">
                        <!-- Range slider container -->
                        <div id="input-slider-range" data-range-value-min="100" data-range-value-max="500"></div>
                        <!-- Range slider values -->
                        <div class="row d-none">
                            <div class="col-6">
                                <span class="range-slider-value value-low" data-range-value-low="200" id="input-slider-range-value-low"></span>
                            </div>
                            <div class="col-6 text-right">
                                <span class="range-slider-value value-high" data-range-value-high="400" id="input-slider-range-value-high"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-md">
                <div class="col-lg-12">
                    <!-- Menu -->
                    <h3 class="h4 text-success font-weight-bold mb-4">Menu</h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-3">
                                <small class="text-uppercase font-weight-bold">With text</small>
                            </div>
                            <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
                                <div class="container">
                                    <a class="navbar-brand" href="#">Menu</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-inner-primary" aria-controls="nav-inner-primary" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="nav-inner-primary">
                                        <div class="navbar-collapse-header">
                                            <div class="row">
                                                <div class="col-6 collapse-brand">
                                                    <a href="./index.html">
                                                        <img src="img/brand/blue.png">
                                                    </a>
                                                </div>
                                                <div class="col-6 collapse-close">
                                                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-inner-primary" aria-controls="nav-inner-primary" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="navbar-nav ml-lg-auto">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Discover
                                                    <span class="sr-only">(current)</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Profile</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="#" id="nav-inner-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-primary_dropdown_1">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="mb-3">
                                <small class="text-uppercase font-weight-bold">With icons</small>
                            </div>
                            <nav class="navbar navbar-expand-lg navbar-dark bg-success rounded">
                                <div class="container">
                                    <a class="navbar-brand" href="#">Menu</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-inner-success" aria-controls="nav-inner-success" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="nav-inner-success">
                                        <div class="navbar-collapse-header">
                                            <div class="row">
                                                <div class="col-6 collapse-brand">
                                                    <a href="./index.html">
                                                        <img src="img/brand/blue.png">
                                                    </a>
                                                </div>
                                                <div class="col-6 collapse-close">
                                                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-inner-success" aria-controls="nav-inner-success" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="navbar-nav ml-lg-auto">
                                            <li class="nav-item">
                                                <a class="nav-link nav-link-icon" href="#">
                                                    <i class="ni ni-favourite-28"></i>
                                                    <span class="nav-link-inner--text d-lg-none">Discover</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link nav-link-icon" href="#">
                                                    <i class="ni ni-notification-70"></i>
                                                    <span class="nav-link-inner--text d-lg-none">Profile</span>
                                                </a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link nav-link-icon" href="#" id="nav-inner-success_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="ni ni-settings-gear-65"></i>
                                                    <span class="nav-link-inner--text d-lg-none">Settings</span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-success_dropdown_1">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
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
