<template>
    <div>
      <section class="section-shaped my-0">
          <div class="shape shape-dark shape-skew">
          </div>
          <div class="container shape-container d-flex">
              <div class="col px-0">
                  <div class="row">
                      <div class="col-lg-6"><h1>Projects</h1></div>
                  </div>
              </div>
          </div>
      </section>
      <section class="section section-lg pt-lg-0 section-projects">
        <div class="container-fluid">
            <div class="row justify-content-between mt--300">
                <div class="col-lg-11">
                  <tabs class="section-y" tabNavClasses="bg-light">
                    <card shadow slot-scope="{activeTabIndex}" class="container-y">
                        <tab-pane key="tab1">
                          <div slot="title">
                              <i class="ni ni-cloud-upload-96 mr-2"></i>Medical
                          </div>
                          <b-card no-body>
                              <b-list-group flush>
                                <b-list-group-item href="#">Franklin Medical Center</b-list-group-item>
                                <b-list-group-item href="#">UNC Radiology Center</b-list-group-item>
                              </b-list-group>
                              <b-card-body>
                                <div class="carousel-item">
                                  <img src="" alt="">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Medical Project One</h5>
                                    <p>...</p>
                                  </div>
                                </div>
                              </b-card-body>
                            </b-card>
                        </tab-pane>

                        <tab-pane key="tab2">
                            <div slot="title">
                                <i class="ni ni-bell-55 mr-2"></i>Educational
                            </div>
                            <b-card no-body>
                              <b-list-group flush>
                                <b-list-group-item href="#">WB Wicker STEAM</b-list-group-item>
                                <b-list-group-item href="#">Sampson County Community College</b-list-group-item>
                                <b-list-group-item href="#">Noble Middle School</b-list-group-item>
                                <b-list-group-item href="#">Wrightsville Elementary School</b-list-group-item>
                              </b-list-group>
                              <b-card-body>
                                <div class="carousel-item">
                                  <img src="" alt="">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Medical Project One</h5>
                                    <p>...</p>
                                  </div>
                                </div>
                              </b-card-body>
                            </b-card>
                        </tab-pane>

                        <tab-pane key="tab3">
                            <div slot="title">
                                <i class="ni ni-calendar-grid-58 mr-2"></i>Commercial
                            </div>
                            <b-card no-body>
                              <b-list-group flush>
                                <b-list-group-item href="#">Sanford SECU</b-list-group-item>
                                <b-list-group-item href="#">Tin Roof Restaurant</b-list-group-item>
                                <b-list-group-item href="#">Drive Shack</b-list-group-item>
                              </b-list-group>
                              <b-card-body>
                                <div class="carousel-item">
                                  <img src="" alt="">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Medical Project One</h5>
                                    <p>...</p>
                                  </div>
                                </div>
                              </b-card-body>
                            </b-card>
                        </tab-pane>

                        <tab-pane key="tab4">
                            <div slot="title">
                                <i class="ni ni-calendar-grid-58 mr-2"></i>Municipality
                            </div>
                            <b-card no-body>
                              <b-list-group flush>
                                <b-list-group-item href="#">Iredell County Jail</b-list-group-item>
                              </b-list-group>
                              <b-card-body>
                                <div class="carousel-item">
                                  <img src="" alt="">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Medical Project One</h5>
                                    <p>...</p>
                                  </div>
                                </div>
                              </b-card-body>
                            </b-card>
                        </tab-pane>

                        <tab-pane key="tab5">
                            <div slot="title">
                                <i class="ni ni-calendar-grid-58 mr-2"></i>Multi Family
                            </div>
                            <b-card no-body>
                              <b-list-group flush>
                                <b-list-group-item href="#">Aspens Senior Living </b-list-group-item>
                                <b-list-group-item href="#">Wood</b-list-group-item>
                              </b-list-group>
                              <b-card-body>
                                <div class="carousel-item">
                                  <img src="" alt="">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Medical Project One</h5>
                                    <p>...</p>
                                  </div>
                                </div>
                              </b-card-body>
                            </b-card>
                        </tab-pane>
                    </card>
                </tabs>
              </div>
            </div>
        </div>
      </section>
    </div>
</template>
<script>

  import Tabs from "@/components/Tabs/Tabs.vue";
  import TabPane from "@/components/Tabs/TabPane.vue";
  
  export default {
    components: {

      Tabs,
      TabPane
    },
  }
</script> 

