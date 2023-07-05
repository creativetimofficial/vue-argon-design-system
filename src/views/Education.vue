<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0 left"
          >
            <div class="row justify-content-right">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/theme/towson.png'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="text-left">
              <h1>Towson University</h1>
              <div class="h4 mt-3">
                Bachelor of Science - Information Technology
              </div>
              <div class="h6 mt-1 text-right">Graduated - December 2018</div>
            </div>
          </card>
        </div>
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0 left"
          >
            <div class="row justify-content-right">
              <div class="col-lg-4 order-lg-4">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/theme/jhu.png'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>  
            <div class="text-left">
              <h1>John Hopkins University</h1>
              <div class="h4 mt-3">
                Certificate of completion -Fullstack MERN Developer
              </div>
              <div class="h6 mt-1 text-right">Graduated - February 2021</div>
            </div>
          </card>
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
