<template>
    <section class="section section-components">
        <div class="container">
            <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <!-- Tabs with icons -->
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">With icons</small>
                    </div>
                    <tabs fill class="flex-column flex-md-row">
                        <card shadow>
                            <tab-pane>
                                <template slot="title">
                                    <i class="ni ni-cloud-upload-96 mr-2"></i>Home
                                </template>

                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.</p>
                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                            </tab-pane>

                            <tab-pane>
                                <template slot="title">
                                    <i class="ni ni-bell-55 mr-2"></i>Profile
                                </template>

                                <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                    american apparel, butcher voluptate nisi qui.</p>
                            </tab-pane>

                            <tab-pane>
                                <template slot="title">
                                    <i class="ni ni-calendar-grid-58 mr-2"></i>Messages
                                </template>

                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.</p>
                            </tab-pane>
                        </card>
                    </tabs>
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0">
                    <!-- Menu -->
                    <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">With text</small>
                    </div>
                    <tabs fill class="flex-column flex-md-row">
                        <card shadow>
                            <tab-pane title="Home">
                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.</p>
                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                            </tab-pane>

                            <tab-pane title="Profile">
                                <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                    american apparel, butcher voluptate nisi qui.</p>
                            </tab-pane>

                            <tab-pane title="Messages">
                                <p class="description">Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.</p>
                            </tab-pane>
                        </card>
                    </tabs>
                </div>
            </div>
            <div class="row row-grid justify-content-between align-items-center mt-lg">
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-4">Progress bars</h3>
                    <base-progress :value="40" label="Task completed"></base-progress>
                    <base-progress type="primary" :value="60" label="Task completed"></base-progress>
                </div>
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-5">Pagination</h3>
                    <base-pagination :page-count="10" v-model="pagination.default"></base-pagination>
                    <base-pagination :page-count="10" v-model="pagination.danger"></base-pagination>
                </div>
            </div>
            <div class="row row-grid justify-content-between">
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-5">Navigation Pills</h3>
                    <tabs :fill="false">
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i class="ni ni-atom"></i></span>
                        </tab-pane>
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i class="ni ni-chat-round"></i></span>
                        </tab-pane>
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i
                                    class="ni ni-cloud-download-95"></i></span>
                        </tab-pane>
                    </tabs>
                </div>
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-5">Labels</h3>
                    <badge type="primary" class="text-uppercase">Primary</badge>
                    <badge type="success" class="text-uppercase">Success</badge>
                    <badge type="danger" class="text-uppercase">Danger</badge>
                    <badge type="warning" class="text-uppercase">Warning</badge>
                    <badge type="info" class="text-uppercase">Info</badge>
                </div>
            </div>
            <h3 class="mt-lg mb-4">
                <span>Alerts</span>
            </h3>
            <base-alert type="success" icon="ni ni-like-2" dismissible>
                <span slot="text"><strong>Success!</strong> This is a success alert—check it out!</span>
            </base-alert>

            <base-alert type="info" icon="ni ni-bell-55" dismissible>
                <span slot="text"><strong>Info!</strong> This is an info alert—check it out!</span>
            </base-alert>

            <base-alert type="warning" icon="ni ni-bell-55" dismissible>
                <span slot="text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
            </base-alert>

            <base-alert type="danger" icon="ni ni-support-16" dismissible>
                <span slot="text"><strong>Danger!</strong> This is an error alert—check it out!</span>
            </base-alert>

            <typography></typography>
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span>Images</span>
            </h2>
            <div class="row">
                <div class="col-sm-3 col-6">
                    <small class="d-block text-uppercase font-weight-bold mb-4">Image</small>
                    <img v-lazy="'img/theme/team-1-800x800.jpg'" alt="Rounded image" class="img-fluid rounded shadow"
                         style="width: 150px;">
                </div>
                <div class="col-sm-3 col-6">
                    <small class="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
                    <img v-lazy="'img/theme/team-2-800x800.jpg'" alt="Circle image"
                         class="img-fluid rounded-circle shadow" style="width: 150px;">
                </div>
                <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                    <small class="d-block text-uppercase font-weight-bold mb-4">Raised</small>
                    <img v-lazy="'img/theme/team-3-800x800.jpg'" alt="Raised image" class="img-fluid rounded shadow-lg"
                         style="width: 150px;">
                </div>
                <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                    <small class="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" alt="Raised circle image"
                         class="img-fluid rounded-circle shadow-lg" style="width: 150px;">
                </div>
            </div>
            <h2 class="mt-lg mb-5">
                <span>Javascript Components</span>
            </h2>
            <h3 class="h4 text-success font-weight-bold mb-4">Modals</h3>
            <!-- Modals -->
            <div class="row">
                <div class="col-md-4">
                    <button type="button" class="btn btn-block btn-primary mb-3" data-toggle="modal"
                            data-target="#modal-default">Default
                    </button>
                    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog"
                         aria-labelledby="modal-default" aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-default">Type your modal title</h6>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.</p>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences
                                        fly into your mouth.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    <button type="button" class="btn btn-link  ml-auto" data-dismiss="modal">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <button type="button" class="btn btn-block btn-warning mb-3" data-toggle="modal"
                            data-target="#modal-notification">Notification
                    </button>
                    <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog"
                         aria-labelledby="modal-notification" aria-hidden="true">
                        <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                            <div class="modal-content bg-gradient-danger">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-notification">Your attention is
                                        required</h6>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="py-3 text-center">
                                        <i class="ni ni-bell-55 ni-3x"></i>
                                        <h4 class="heading mt-4">You should read this!</h4>
                                        <p>A small river named Duden flows by their place and supplies it with the
                                            necessary regelialia.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-white">Ok, Got it</button>
                                    <button type="button" class="btn btn-link text-white ml-auto" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <button type="button" class="btn btn-block btn-default" data-toggle="modal"
                            data-target="#modal-form">Form
                    </button>
                    <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form"
                         aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                            <div class="modal-content">
                                <div class="modal-body p-0">
                                    <div class="card bg-secondary shadow border-0">
                                        <div class="card-header bg-white pb-5">
                                            <div class="text-muted text-center mb-3">
                                                <small>Sign in with</small>
                                            </div>
                                            <div class="btn-wrapper text-center">
                                                <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                              <img src="img/icons/common/github.svg">
                            </span>
                                                    <span class="btn-inner--text">Github</span>
                                                </a>
                                                <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                              <img src="img/icons/common/google.svg">
                            </span>
                                                    <span class="btn-inner--text">Google</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body px-lg-5 py-lg-5">
                                            <div class="text-center text-muted mb-4">
                                                <small>Or sign in with credentials</small>
                                            </div>
                                            <form role="form">
                                                <div class="form-group mb-3">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i
                                                                    class="ni ni-email-83"></i></span>
                                                        </div>
                                                        <input class="form-control" placeholder="Email" type="email">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i
                                                                    class="ni ni-lock-circle-open"></i></span>
                                                        </div>
                                                        <input class="form-control" placeholder="Password"
                                                               type="password">
                                                    </div>
                                                </div>
                                                <div class="custom-control custom-control-alternative custom-checkbox">
                                                    <input class="custom-control-input" id=" customCheckLogin"
                                                           type="checkbox">
                                                    <label class="custom-control-label" for=" customCheckLogin">
                                                        <span>Remember me</span>
                                                    </label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-primary my-4">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Datepicker -->
            <h3 class="h4 text-success font-weight-bold mt-md mb-4">Datepicker</h3>
            <div class="row">
                <div class="col-md-4">
                    <small class="d-block text-uppercase font-weight-bold mb-3">Single date</small>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="form-control datepicker" placeholder="Select date" type="text"
                                   value="06/20/2018">
                        </div>
                    </div>
                </div>
                <div class="col-md-8 mt-4 mt-md-0">
                    <small class="d-block text-uppercase font-weight-bold mb-3">Date range</small>
                    <div class="input-daterange datepicker row align-items-center">
                        <div class="col">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Start date" type="text" value="06/18/2018">
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="End date" type="text" value="06/22/2018">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Tooltips and Popovers -->
            <h3 class="h4 text-success font-weight-bold mt-md mb-4">Tooltips &amp; Popovers</h3>
            <div class="row">
                <div class="col-lg-6">
                    <small class="d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
                    <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                            data-placement="left" title="Tooltip on left" data-container="body" data-animation="true"
                            data-delay="100">On left
                    </button>
                    <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                            data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On
                        top
                    </button>
                    <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                            data-placement="bottom" title="Tooltip on bottom" data-container="body"
                            data-animation="true">On bottom
                    </button>
                    <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                            data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">
                        On right
                    </button>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                    <small class="d-block text-uppercase font-weight-bold mb-3">Popovers</small>
                    <button type="button" class="btn btn-sm btn-default" data-container="body"
                            data-original-title="Popover On Left" data-toggle="popover" data-placement="left"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On left
                    </button>
                    <button type="button" class="btn btn-sm btn-default" data-container="body"
                            data-original-title="Popover on Top" data-toggle="popover" data-placement="top"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On top
                    </button>
                    <button type="button" class="btn btn-sm btn-default" data-container="body"
                            data-original-title="Popover on Right" data-toggle="popover" data-placement="right"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On right
                    </button>
                    <button type="button" class="btn btn-sm btn-default" data-container="body"
                            data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On bottom
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  import Tabs from "@/components/Tabs/Tabs.vue";
  import TabPane from "@/components/Tabs/TabPane.vue";
  import Typography from './Typography';

  export default {
    components: {
      TabPane,
      Tabs,
      Typography
    },
    data() {
      return {
        pagination: {
          default: 1,
          danger: 3
        }
      }
    }
  };
</script>
<style>
</style>
