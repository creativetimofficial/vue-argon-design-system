<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/theme/aboutMe.jpg'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4"
                    >Message Me on
                    <i class="fa fa-google-plus"></i>
                  </base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">Hi, my name is Roger,</span>
                    <span class="description">Welcome to my page!</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <div class="h5 mt-6">
                <i class="ni business_briefcase-24 mr-2"></i>
                <span class="font-weight-light">31 years old</span>
              </div>
              <div class="h6 mt-3">
                <i class="fa fa-briefcase mr-2"></i> Jr. Software Engineer
              </div>
              <div class="h6 mt-2">
                <i class="fa fa-map-marker mr-2"></i>Baltimore, Maryland
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    I’m a skilled Software Engineer with 3+ years of hands-on
                    experience on software development.I am also a certified
                    Full Stack Web Developer (MERN stack) dealing on a daily
                    basis with challenges and sharpening my problem-solving
                    skills. My strengths lie in my curiosity and passion for
                    innovation, specifically in digital products, good
                    engineering, micro services, and Rest APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>