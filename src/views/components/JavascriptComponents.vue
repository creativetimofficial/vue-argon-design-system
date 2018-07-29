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
                    <tabs :fill="false" circle>
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
            <modals></modals>
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
  import Modals from './Modals';
  import Typography from './Typography';

  export default {
    components: {
      Modals,
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
